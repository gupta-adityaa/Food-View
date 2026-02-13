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

## 📂 Project Structure

```text
Food-View/
├── backend/
│   ├── src/
│   │   ├── controllers/   # Request logic & route handlers
│   │   ├── routes/        # API endpoint definitions
│   │   ├── models/        # Database schemas
│   │   ├── middlewares/   # Auth & error handling
│   │   ├── services/      # Business logic & 3rd party integrations
│   │   └── db/            # Database connection setup
│   └── server.js          # Entry point for backend
│
├── frontend/
│   ├── src/
│   │   ├── pages/         # Full-view components (Home, Profile, etc.)
│   │   ├── components/    # Reusable UI elements
│   │   ├── routes/        # Client-side routing logic
│   │   └── styles/        # CSS/Sass files
│   └── main.jsx           # Entry point for frontend
```


---

## 🔐 Authentication & Authorization

- JWT-based authentication
- Password hashing using bcrypt
- Cookie-based token storage
- Middleware-protected routes
- Role-based access control:
  - Partner-only routes (Create Post)
  - User-only routes (Like, Save)

---

## 🗄️ Database Design (MongoDB + Mongoose)

### Primary Collections

- **User**
- **FoodPartner**
- **Food**
- **Like**
- **Save**

### Key Relationships

- Food → references FoodPartner
- Like → references User + Food
- Save → references User + Food

### Features
- Toggle-based Like/Unlike
- Toggle-based Save/Unsave
- Atomic counter updates for likeCount and savesCount

---

## 🎥 Core Features

### 1️⃣ Reel-Style Feed
- Vertical scrollable video feed
- Dynamic fetching from backend
- Like & Save interactions

### 2️⃣ Media Upload System
- File handling using Multer
- Media uploaded to cloud storage
- Hosted URL stored in MongoDB

### 3️⃣ Protected REST APIs
- 10+ API endpoints
- JWT verification middleware
- Role-based route protection

---

## 🔄 Application Flow

1. Server starts → connects to MongoDB.
2. User or Partner registers/logs in.
3. Backend validates credentials → issues JWT.
4. Partner uploads media → stored in cloud → URL saved in DB.
5. Users browse feed → interact with posts (like/save).
6. Backend updates relational collections and counters.

---

## 📡 API Overview

### Auth Routes
- POST `/api/auth/user/register`
- POST `/api/auth/user/login`
- POST `/api/auth/food-partner/register`
- POST `/api/auth/food-partner/login`

### Food Routes
- POST `/api/food/` (Partner Protected)
- GET `/api/food/` (User Protected)
- POST `/api/food/like`
- POST `/api/food/save`

### Food Partner Routes
- GET `/api/food-partner/:id`

---

## ⚙️ Environment Variables

Create a `.env` file in backend:
```MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_url
```
---

## ▶️ Running the Project Locally

### 1️⃣ Backend

```bash
cd backend
npm install
node server.js
```
Server runs on: http://localhost:3000

### 2️⃣ Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on: http://localhost:5173



