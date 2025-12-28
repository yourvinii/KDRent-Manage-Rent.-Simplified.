import { useContext, useState } from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
// import { loginUser } from "../../services/authService.js";
//testing this new branch feature/login

export default function Login() {
  const { loginUser } = useContext(AuthContext);

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
    setError("")

    try {
      const data = await loginUser(user);
      console.log("Login success", data);

      // store token
      // localStorage.setItem("token", data.token);
      // // optional: store user
      // localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard"); // change
    } catch (error) {
      setError(error.message || "Invalid email or password");
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
        {error && <p style={{color:"red"}} >{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
