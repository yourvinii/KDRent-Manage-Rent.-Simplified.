import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

export const registerUser = async (userData) => {
  const { data } = await API.post("/auth/register", userData);
  return data;
};

export const loginUser = async (userData) => {
  const {data} = await API.post("/auth/login", userData);
  return data;
};

export const getCurrentUser = async () => {
  const {data} = await API.get("/auth/me");
  return data;
};

export const logoutUser = async () => {
  const {data} = await API.post("/auth/logout");
  return data;
};
