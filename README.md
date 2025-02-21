# 📌 Feedback Form

![2025-02-21 (12)](https://github.com/user-attachments/assets/3c4998fc-5052-479b-baf0-fe0531889897)

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
   DATABASE_URL=postgresql://feedback_form_db_user:uiwRk1yIWQaDErFI9BLS3V5QOv6YFk1T@dpg-cus11ppopnds73953p4g-a.oregon-postgres.render.com/feedback_form_db
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

