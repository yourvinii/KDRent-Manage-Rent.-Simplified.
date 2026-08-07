import httpClient from "./httpClient";

export const register = (payload) => httpClient.post("/auth/register", payload);
export const login = (payload) => httpClient.post("/auth/login", payload);
export const getMe = () => httpClient.get("/auth/me");
export const verifyEmail = (payload) => httpClient.post("/auth/verify-email", payload);
export const forgotPassword = (payload) => httpClient.post("/auth/forget-password", payload);
export const resetPassword = (token, payload) => httpClient.post(`/auth/reset-password/${token}`, payload);
