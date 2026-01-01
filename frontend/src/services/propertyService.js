import axios from "axios";

const API = "http://localhost:8080/api/property";

export const addProperty = async (propertyData) => {
  const response = await axios.post(
    `${API}/create`,
    propertyData,
    {
      withCredentials: true   // 🔥 sends cookie (JWT)
    }
  );

  return response.data;
};
