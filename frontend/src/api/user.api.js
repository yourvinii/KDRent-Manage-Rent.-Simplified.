import httpClient from "./httpClient";

export const getProfile = () => httpClient.get("/user/profile");
export const updateProfile = (payload) => httpClient.put("/user/profile", payload);
export const getPublicProfile = (id) => httpClient.get(`/user/public/${id}`);
