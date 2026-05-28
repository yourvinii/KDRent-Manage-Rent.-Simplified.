import axiosInstance from "../api/axios";

//LOGIN
export const loginUser = async (userData) => {
  const response = await axiosInstance.post("/auth/login", userData);
  return response.data;
};

//REGISTER
export const registerUser = async (userData) => {
  const response = await axiosInstance.post("/auth/register", userData);
  return response.data;
};
