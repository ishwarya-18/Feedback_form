require("dotenv").config();
const express = require("express");
const { body, validationResult } = require("express-validator");
const bodyParser = require("body-parser");
const path = require("path");
const { Pool } = require("pg");

const app = express();
const PORT = 3000;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve Feedback Form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Handle Form Submission
app.post(
  "/submit",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("rating").isInt({ min: 1, max: 5 }).withMessage("Rating must be between 1 and 5"),
    body("comments").notEmpty().withMessage("Comments are required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ success: false, errors: errors.array() });
    }

    const { name, email, rating, comments } = req.body;

    try {
      const result = await pool.query(
        "INSERT INTO feedback (name, email, rating, comments) VALUES ($1, $2, $3, $4) RETURNING *",
        [name, email, rating, comments]
      );
      res.json({ success: true, message: "Feedback submitted successfully!" });
    } catch (err) {
      console.error(err);
      res.json({ success: false, message: "Error storing feedback" });
    }
  }
);

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
