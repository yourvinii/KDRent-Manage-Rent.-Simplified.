// All authentication realted APIs calls like login and register are centralized in this service file
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/auth",
  withCredentials: true,
});

export const registerUser = async (userData) => {
  const response = await API.post("/register", userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await API.post("/login", userData);
  return response.data;
};

export const logoutUser = async () => {
  await API.post("/logout", {});
};

// export const logoutUser = async () => {
//   await axios.post(
//     `${API}/logout`,
//     {},
//     { withCredentials: true })};
