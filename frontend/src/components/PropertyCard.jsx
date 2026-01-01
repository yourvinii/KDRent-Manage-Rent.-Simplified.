const PropertyCard = ({ property }) => {
  const { title, location, price, type } = property;

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{title}</h3>
      <p>Location: {location}</p>
      <p>Price: ₹{price}</p>
      <p>Type: {type}</p>
    </div>
  );
};

export default PropertyCard;

