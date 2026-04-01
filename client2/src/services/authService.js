import API from "../api/axios.js";

// login
export const loginUser = async (userData) => {
  const { data } = await API.post("/auth/login", userData);
  return data;
};

// get current logged-in user
export const getCurrentUser = async (userData) => {
  const { data } = await API.get("/auth/me");
  return data;
};

//logout

export const logoutUser = async (userdata) => {
  const { data } = await API.post("/auth/logout");
  return data;
};
