import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputData = (event) => {
    setUser((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  const handleSubimt = (event) => {
    event.preventDefault();
    console.log(user)
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <h1>This is just a Login Page</h1>
      <form onSubmit={handleSubimt}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="enter your email"
            name="email"
            onChange={handleInputData}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleInputData}
          />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
