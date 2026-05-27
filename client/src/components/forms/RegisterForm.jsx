import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
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
    e.preventDefault;
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name"
        name="name"
        type="text"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        label="email"
        name="email"
        type="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
      />

      <Button type="submit" text="Register" />
    </form>
  );
};

export default RegisterForm;
