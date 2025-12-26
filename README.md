# KDRent

KDRent is a rental property management web application built using the MERN stack.  
The project focuses on secure authentication, protected routes, and a clean frontend–backend architecture.

This project is being developed to strengthen real-world full-stack development skills.

---

## 🚀 Tech Stack

**Frontend**
- React
- React Router
- Context API

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB

**Authentication**
- JWT (JSON Web Token)
- httpOnly Cookies

---

## ✨ Features

- User Registration & Login
- Secure Authentication using JWT
- Auth state management using Context API
- Protected routes using PrivateRoute
- Frontend–backend separation using service layer
- Scalable folder structure

---

## 🔐 Authentication Flow

1. User submits login/register form from the frontend
2. Frontend calls `authService.js`
3. Backend validates user credentials
4. JWT token is generated on the server
5. Token is sent as an **httpOnly cookie**
6. Auth state is managed using Context API
7. Protected routes are handled using `PrivateRoute`

---

## 🧠 Project Architecture


Frontend (React)
│
├── Pages (Login, Register, Dashboard)
├── Routes (PrivateRoute)
├── Context (AuthContext)
├── Services (authService)
│
Backend (Express)
│
├── Routes
├── Controllers
├── Middleware
├── Database (MongoDB)



---

## 📁 Folder Structure (Frontend)

src/
├── pages/
├── routes/
│ └── PrivateRoute.jsx
├── context/
│ └── AuthContext.jsx
├── services/
│ └── authService.js
├── router.jsx
└── main.jsx




---

## 🧩 Key Learnings

- Why Context API is useful for global auth state
- How protected routes work in React
- Why httpOnly cookies are more secure than localStorage
- Importance of separating API logic using service files
- How frontend and backend communicate in real projects

---

## ⚠️ Challenges Faced

**Challenge:** Managing authentication across multiple pages  
**Solution:** Used Context API to maintain global auth state

**Challenge:** Token security  
**Solution:** Switched from localStorage to httpOnly cookies

---

## 🔮 Future Improvements

- Role-based access control (Admin/User)
- Property listing & management
- Tenant management
- Payment integration
- Better UI/UX

---

## 🛠️ Setup Instructions

1. Clone the repository
2. Install frontend and backend dependencies
3. Add environment variables
4. Run backend and frontend servers

---

## 📌 Note

This project is actively being improved as part of the learning process.  
Code quality and architecture decisions are made with real-world practices in mind.
