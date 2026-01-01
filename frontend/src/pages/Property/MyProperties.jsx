import PropertyCard from "../../components/PropertyCard";

const MyProperties = () => {
  // 🔹 Step 1: Create dummy data here
  const dummyProperties = [
    {
      id: 1,
      title: "Sunny Apartment",
      location: "Delhi",
      price: 15000,
      type: "Rent",
    },
    {
      id: 2,
      title: "Cozy PG",
      location: "Mumbai",
      price: 8000,
      type: "PG",
    },
    {
      id: 3,
      title: "Luxury Villa",
      location: "Bangalore",
      price: 50000,
      type: "Rent",
    },
  ];

  // 🔹 Step 2: Map through dummy data and render cards
  return (
    <div>
      <h2>My Properties</h2>

      {dummyProperties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default MyProperties;

