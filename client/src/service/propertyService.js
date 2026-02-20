import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

export const createProperty = async (propertyData) => {
  try {
    const response = await API.post("/property/create", propertyData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to add property");
  }
};

export const getMyProperties = async () => {
  const { data } = await API.get("/property/my");
  return data;
};

export const getMyPropertyById = async (id) => {
  const { data } = await API.get(`/property/${id}`);
  return data;
};

export const deleteProperty = async (id) => {
  const { data } = await API.delete(`/property/${id}`);
  return data;
};

export const updateProperty = async (id, formData) => {
  const { data } = await API.put(`/property/${id}`, formData);
  return data;
};
