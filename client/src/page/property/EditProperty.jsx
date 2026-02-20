import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getMyPropertyById,
  updateProperty,
} from "../../service/propertyService";

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchProperty = async () => {
      const data = await getMyPropertyById(id);
      setFormData(data.property);
    };

    fetchProperty();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProperty(id, formData);
    navigate(`/dashboard/my-properties/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData.title || ""}
        onChange={(e) =>
          setFormData({ ...formData, title: e.target.value })
        }
      />
      <input
        value={formData.monthlyRent || ""}
        onChange={(e) =>
          setFormData({ ...formData, monthlyRent: e.target.value })
        }
      />
      <button type="submit">Update Property</button>
    </form>
  );
};

export default EditProperty;
