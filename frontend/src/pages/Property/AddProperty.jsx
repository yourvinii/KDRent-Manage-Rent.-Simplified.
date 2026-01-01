import { useState } from "react";

export default function AddProperty() {
  const [property, setProperty] = useState({
    title: "",
    address: "",
    city: "",
    country:"",
    monthlyRent: "",
  });

  const handleInputData = (event) => {
    setProperty((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(property);
    setProperty({
      title: "",
      address: "",
      city: "",
      country:"",
      monthlyRent: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Catchy Title"
            value={property.title}
            onChange={handleInputData}
          />
        </div>

        <br />
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Enter your Property Address"
            value={property.address}
            onChange={handleInputData}
          />
        </div>

        <br />
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Enter city"
            value={property.city}
            onChange={handleInputData}
          />
        </div>

        <br />
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            placeholder="India"
            value={property.country}
            onChange={handleInputData}
          />
        </div>

        <br />
        <div>
          <label htmlFor="monthlyRent">Monthly Rent</label>
          <input
            name="monthlyRent"
            id="monthlyRent"
            placeholder="3000/months"
            onChange={handleInputData}
            value={property.monthlyRent}
          />
        </div>

        <br />
        <button type="submit">Add Property</button>
      </form>
    </>
  );
}
