import { useState } from "react";
import { registerUser } from "../../service/authService.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleInputChange = (event) => {
    setUser((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  };

  const handelSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await registerUser(user);
      console.log("REGISTER RESPONSE : ", data);

      // important check

      if (!data || !data.success) {
        alert(data.message || "Registration Failed");
        return;
      }

      register(data.user);
      navigate("/dashboard")
    } catch (error) {
      console.log("Register Page Error : ", error);
    }

    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <br />
        <div>
          <label htmlFor="name">Name</label> &nbsp;
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            onChange={handleInputChange}
            value={user.name}
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label> &nbsp;
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter email"
            onChange={handleInputChange}
            value={user.email}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label> &nbsp;
          <input
            type="password"
            placeholder="enter password"
            id="password"
            name="password"
            onChange={handleInputChange}
            value={user.password}
          />
        </div>
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
}
