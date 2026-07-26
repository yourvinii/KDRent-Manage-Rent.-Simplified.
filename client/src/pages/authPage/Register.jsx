import { useState } from "react";
import AuthLayout from "../../components/auth/AuthLayout";

import { registerUser } from "../../api/authApi";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "tenant",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      return alert("Name is required");
    }

    if (!formData.email.trim()) {
      return alert("Email is required");
    }

    if (!formData.password) {
      return alert("Password is required");
    }

    if (!formData.confirmPassword) {
      return alert("Confirm Password is required");
    }

    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      setLoading(true);

      const data = await registerUser(formData);

      console.log(data);
    } catch (error) {
      console.log(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join KDRent and start your rental journey."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >
          <option value="tenant">Tenant</option>
          <option value="seller">Seller</option>
        </select>

        <button
  type="submit"
  disabled={loading}
  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-blue-400"
>
  {loading ? "Creating Account..." : "Create Account"}
</button>
      </form>
    </AuthLayout>
  );
};

export default Register;
