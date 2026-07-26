import axiosInstance from "../services/axios";

export const loginUser = async (formData) => {
  const response = await axiosInstance.post("/auth/login", formData);

  return response.data;
};


export const registerUser = async (formData) => {
  const response = await axiosInstance.post("/auth/register", formData);

  return response.data;
};