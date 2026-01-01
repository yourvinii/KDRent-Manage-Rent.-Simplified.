// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import { addProperty } from "../../services/propertyService.js";

// export default function AddProperty() {
//   const navigate = useNavigate();
//   const [property, setProperty] = useState({
//     title: "",
//     address: "",
//     city: "",
//     country: "",
//     monthlyRent: "",
//   });

//   const handleInputData = (event) => {
//     setProperty((currData) => {
//       return { ...currData, [event.target.name]: event.target.value };
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(property)
//     // try {
//     //   const data = await addProperty(property);
//     //   console.log("Property Added : ", data);

//     //   // navigate("/my-properties");
//     // } catch (error) {
//     //   throw error;
//     // }

    
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             name="title"
//             id="title"
//             placeholder="Enter Catchy Title"
//             value={property.title}
//             onChange={handleInputData}
//           />
//         </div>

//         <br />
//         <div>
//           <label htmlFor="address">Address</label>
//           <input
//             type="text"
//             name="address"
//             id="address"
//             placeholder="Enter your Property Address"
//             value={property.address}
//             onChange={handleInputData}
//           />
//         </div>

//         <br />
//         <div>
//           <label htmlFor="city">City</label>
//           <input
//             type="text"
//             name="city"
//             id="city"
//             placeholder="Enter city"
//             value={property.city}
//             onChange={handleInputData}
//           />
//         </div>

//         <br />
//         <div>
//           <label htmlFor="country">Country</label>
//           <input
//             type="text"
//             name="country"
//             id="country"
//             placeholder="India"
//             value={property.country}
//             onChange={handleInputData}
//           />
//         </div>

//         <br />
//         <div>
//           <label htmlFor="monthlyRent">Monthly Rent</label>
//           <input
//           type="Number"
//             name="monthlyRent"
//             id="monthlyRent"
//             placeholder="3000/months"
//             onChange={handleInputData}
//             value={property.monthlyRent}
//           />
//         </div>

//         <br />
//         <button type="submit">Add Property</button>
//       </form>
//     </>
//   );
// }




import { useState } from "react";
import { addProperty } from "../../services/propertyService";

const AddProperty = () => {
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    city: "",
    country: "",
    monthlyRent: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await addProperty(formData);
      alert(res.message);
    } catch (error) {
      alert(error.response?.data?.message || "Error adding property");
    }
  };

  return (
    <div>
      <h2>Add Property</h2>

      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <input name="address" placeholder="Address" onChange={handleChange} />
        <input name="city" placeholder="City" onChange={handleChange} />
        <input name="country" placeholder="Country" onChange={handleChange} />
        <input
          name="monthlyRent"
          type="number"
          placeholder="Monthly Rent"
          onChange={handleChange}
        />
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default AddProperty;
