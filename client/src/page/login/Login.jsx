import { useState } from "react";
import { loginUser } from "../../service/authService.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleInputChange = (ev) => {
    setUser((prev) => {
      return { ...prev, [ev.target.name]: ev.target.value };
    });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const data = await loginUser(user);
      console.log("LOGIN RESPONSE:", data);

      //  IMPORTANT CHECK
      if (!data.success) {
        alert(data.message || "Login failed");
        return;
      }

      // ✅ REAL USER FROM BACKEND
      login(data.user);

      // login(user);
      navigate("/dashboard");
    } catch (error) {
      console.log("Login page : ", error);
    }
    setUser({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label htmlFor="email">Email</label> &nbsp;
          <input
            type="text"
            id="email"
            name="email"
            placeholder="enter email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label> &nbsp;
          <input
            type="password"
            id="password"
            name="password"
            placeholder="enter password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
