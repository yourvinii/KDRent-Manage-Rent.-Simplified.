import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

export const registerUser = async (userData) => {
  try {
    const res = await axios.post(
      "http://localhost:8080/api/auth/register",
      userData,
      { withCredentials: true }
    );

    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const loginUser = async (userData) => {
  const response = await API.post("/auth/login", userData);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await API.get("/auth/me");
  return response.data;
};

export const logoutUser = async () => {
  const response = await API.post("/auth/logout");
  return response.data;
};
