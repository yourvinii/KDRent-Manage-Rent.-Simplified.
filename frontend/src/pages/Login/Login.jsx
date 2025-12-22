import { useState } from "react";
import { loginUser } from "../../services/authService.js";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputData = (event) => {
    setUser((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);

    try {
      const data = await loginUser(user);
      console.log("Login success", data);

       // store token
      localStorage.setItem("token", data.token);
      // optional: store user
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard"); // change

    } catch (error) {
      setError(error.message || "Login Failed");
    } finally {
      setLoading(false);
    }

    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
      
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            name="email"
            onChange={handleInputData}
            value={user.email}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            name="password"
            onChange={handleInputData}
            value={user.password}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
