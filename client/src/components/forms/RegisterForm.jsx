import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import { registerUser } from "../../services/authService";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault;

    try {
      setLoading(true);
      const data = await registerUser(formData);
      console.log("REGISTER SUCCESS:", data);

      alert("Registraion Successful");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Registraion Failed");
    } finally {
      setLoading(false);
    }
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

      <Button type="submit" text={loading ? "Loading..." : "Register"} />
    </form>
  );
};

export default RegisterForm;
