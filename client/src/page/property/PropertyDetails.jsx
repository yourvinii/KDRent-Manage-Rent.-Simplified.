import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getMyPropertyById,
  deleteProperty,
} from "../../service/propertyService";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const data = await getMyPropertyById(id);
      setProperty(data.property);
    };

    fetchProperty();
  }, [id]);

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this property?")) return;

    await deleteProperty(id);
    navigate("/dashboard/my-properties");
  };

  if (!property) return <p>Loading...</p>;

  return (
    <div>
      <h2>{property.title}</h2>
      <p>📍 {property.address}, {property.city}, {property.country}</p>
      <p>💰 ₹{property.monthlyRent}</p>

      <button
        onClick={() =>
          navigate(`/dashboard/my-properties/${id}/edit`)
        }
      >
        Edit
      </button>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PropertyDetails;
