import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="
    bg-white
    shadow-lg
    rounded-2xl
    p-8
    w-full
    max-w-md
    space-y-6
    "
    >
      <h1 className=" text-3xl font-bold text-center ">Login</h1>
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <Button type="submit" text="Login" />
    </form>
  );
};

export default LoginForm;
