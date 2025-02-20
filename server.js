const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const { Pool } = require('pg');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Multer for file uploads
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'user_registration',
    password: '2005',
    port: 5432,
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', upload.single('profilePicture'), async (req, res) => {
    const { name, username, email, phone, password, dob, communicationMethod, role, referralCode, terms } = req.body;
    const profilePicture = req.file ? req.file.filename : null;

    if (!name || !username || !email || !phone || !password || !dob || !communicationMethod || !role || !terms) {
        return res.status(400).json({ success: false, message: 'All required fields must be filled!' });
    }

    try {
        const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

        if (existingUser.rows.length > 0) {
            return res.status(400).json({ success: false, message: 'User already exists in database' });
        }

        await pool.query(
            "INSERT INTO users (name, username, email, phone, password, dob, profile_picture, communication_method, role, referral_code, terms) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)",
            [name, username, email, phone, password, dob, profilePicture, communicationMethod, role, referralCode, terms]
        );

        res.json({ success: true, message: 'User registered successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
