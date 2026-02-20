import { useState } from "react";
import "./addProperty.css";
import {createProperty} from '../../service/propertyService.js'
import {useNavigate} from 'react-router-dom'

export default function AddProperty() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    city: "",
    country: "",
    monthlyRent: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const data = await createProperty(formData);
      
      if (data.success) {
        // ✅ redirect only on success
        setMessage("✅ Property added successfully");
        navigate("/dashboard/my-properties");
      }


      // navigate("/my-properties my-properties")
      setFormData({
        title: "",
        address: "",
        city: "",
        country: "",
        monthlyRent: "",
      });
    }  catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Property creation failed");
    
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-property-container">
      <h2>Add Property</h2>

      <form onSubmit={handleSubmit} className="add-property-form">
        <input
          type="text"
          name="title"
          placeholder="Property Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="monthlyRent"
          placeholder="Monthly Rent"
          value={formData.monthlyRent}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Property"}
        </button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

// export default AddProperty;
