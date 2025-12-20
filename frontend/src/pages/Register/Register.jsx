import { useState } from "react";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputData = (event) => {
    setUser((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
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
          />
        </div>
        <br />
        <div>
          <label htmlFor="passowrd">Password</label>
          <input
            type="passowrd"
            id="passowrd"
            placeholder="password"
            name="password"
            onChange={handleInputData}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
