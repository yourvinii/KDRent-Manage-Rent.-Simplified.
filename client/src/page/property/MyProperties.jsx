import { getMyProperties } from "../../service/propertyService";
import { useState, useEffect } from "react";
import "./myproperties.css"

import { useNavigate } from "react-router-dom";

export default function MyProperties() {
  const navigate = useNavigate()
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyProperties = async () => {
      try {
        const data = await getMyProperties();
        setProperties(data.properties);
      } catch (error) {
        console.error("Error fetching properties", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyProperties();
  }, []);

  if (loading) return <p>Loading properties...</p>;
  return (
    <div className="container">
      <h2>My Properties</h2>

      {/* Count */}
      <p>
        Total Properties: <strong>{properties.length}</strong>
      </p>

      {/* Empty State */}
      {properties.length === 0 && <p>You have not added any properties yet.</p>}

      {/* List */}
      <div className="property-list">
        {properties.map((property) => (
          <div className="property-card" key={property._id}>
            <h3>{property.title}</h3>
            <p>📍 {property.address}</p>
            <p>📍 {property.city}</p>
            <p>📍 {property.country}</p>
            <p>💰 ₹{property.monthlyRent}</p>
            <p>{property.description}</p>
            <button
            onClick={() =>
              navigate(`/dashboard/my-properties/${property._id}`)
            }
          >
            See Details
          </button>
          </div>
        ))}
      </div>
    </div>
  );
}
