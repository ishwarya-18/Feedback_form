# 📌 Feedback Form

A stylish and user-friendly feedback form that allows users to submit their feedback, rate their experience, and subscribe to a newsletter. 🌟

---

## 🚀 Features

- 📩 **User Feedback Submission** – Collects user input including name, email, and comments.
- ⭐ **Rating System** – Users can rate their experience using a 5-star rating system.
- 🔍 **Feedback Categories** – Users can categorize their feedback (Website, Service, Product, Other).
- 📨 **Newsletter Subscription** – Option to subscribe to newsletters.
- 📊 **Feedback Storage** – Data is stored in a PostgreSQL database.

---

## 🛠️ Tech Stack

- 🌐 **Frontend:** HTML, CSS, JavaScript
- 🖥️ **Backend:** Node.js, Express.js
- 🗄️ **Database:** PostgreSQL

---

## 🏗️ Installation & Setup

1. **Clone the Repository**
   ```sh
   git clone https://github.com/ishwarya-18/Feedback_form
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Set Up Database**
   - Create a PostgreSQL database.
   - Update the `.env` file with your database credentials:
   ```env
   DATABASE_URL=postgresql://postgres:2005@localhost:5432/feedback_form
   ```

4. **Run the Server**
   ```sh
   node server.js
   ```

5. **Open in Browser**
   - Navigate to `https://feedbackform-va7h.onrender.com` to access the feedback form.

---

## 📂 Project Structure
```
feedback-form/
│── styles.css             
│── server.js            
│── script.js        
│── package.json       
│── .env                
│── index.html         
```

---

## 🎯 API Endpoints
| Method | Endpoint | Description |
|--------|-------------|-------------|
| GET | `/feedbacks` | Retrieve all feedback |
| POST | `/submit` | Submit new feedback |

---

## 🤝 Contributing
Feel free to submit pull requests or open issues for improvements. 😊

---

## 📜 License
This project is licensed under the MIT License. 📄

