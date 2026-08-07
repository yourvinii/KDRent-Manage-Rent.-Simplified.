import axios from "axios";
import { getToken } from "../utils/storage";

// One client keeps every request pointed at the same deployable API URL.
const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

httpClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default httpClient;
