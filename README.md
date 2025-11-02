# 💼 LinkedIn Clone – Full Stack Developer Internship Assignment

This is a full-stack LinkedIn Clone web application built as part of the **AppDost Full Stack Developer Internship Assignment**.  
It allows users to register, log in, create posts, and like posts, with a responsive interface and secure backend.

---

## ⚙️ How to Run the Project

### 🧩 Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   npm install
2. Create a .env file in the backend folder and add:
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
3. Start the backend server:
   npm run dev
   The backend will run on:
   http://localhost:5000

### 🧩 Frotend Setup
     cd frontend
     npm install
 4. Create a .env file in the frontend folder and add:
    VITE_API_BASE=http://localhost:5000/api
 5. Start the frontend:
    npm run dev
    The frontend will run on:
    http://localhost:5173
    
🌐 Deployed Links
 Frontend (Netlify): https://linkedin-clone-frontend-otwq.onrender.com
 Backend (Render): https://linkedin-clone-tauo.onrender.com

🧩 Tech Stack Used
🖥️ Frontend
React.js (Vite) – UI development
Bootstrap 5 – Styling and layout
Axios – API calls
React Router DOM – Routing
Netlify – Frontend hosting

⚙️ Backend
Node.js & Express.js – RESTful API
MongoDB Atlas – Database
Mongoose – Database modeling
JWT (JSON Web Token) – Authentication
Render – Backend hosting


🌟 Features Implemented

✅ User Authentication:
Users can register and log in securely with JWT-based authentication.
✅ Create & View Posts:
Authenticated users can create new posts and view all posts.
✅ Recent Posts First:
The latest posts appear at the top of the feed.
✅ Integrated Frontend and Backend:
Complete MERN stack integration with working API endpoints.

👨‍💻 Developer
Name: Harshavardhan Reddy
Institute: B.V. Raju Institute of Technology (BVRIT)
GitHub: Harsha120903
