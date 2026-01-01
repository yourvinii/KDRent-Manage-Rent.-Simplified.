import { useState, useContext } from "react";
// import { registerUser } from "../../services/authService.js"; // remove
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
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
      const data = await registerUser(user);
      console.log("Register success", data);

      navigate("/login");
    } catch (error) {
      setError(error.message || "Registration Failed");
    } finally {
      setLoading(false);
    }

    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Full Name"
            name="name"
            onChange={handleInputData}
            value={user.name}
          />
        </div>
        <br />
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
