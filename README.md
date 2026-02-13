# 🍔 Food View – Role-Based MERN Food Sharing Platform

A full-stack web application inspired by short-form reel platforms, built specifically for food content sharing.  

Food View enables **Food Partners** to upload short-form food videos/posts and allows **Users** to browse, like, and save content in a vertical reel-style feed.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- React Router
- CSS (Custom styling)
- Axios (API communication)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (Authentication)
- bcrypt (Password hashing)
- Multer (File handling)
- Cloud Storage (ImageKit / similar service)

---

## 👥 User Roles

### 1️⃣ User
- Register / Login
- Browse vertical reel feed
- Like / Unlike posts
- Save / Unsave posts
- View saved posts
- View food partner profiles

### 2️⃣ Food Partner
- Register / Login
- Create food posts (video/image + description)
- View own profile and posts
- Manage uploaded content

---

## 🏗️ Project Architecture

Food-View/
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── models/
│ │ ├── middlewares/
│ │ ├── services/
│ │ └── db/
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── routes/
│ │ └── styles/
│ └── main.jsx
