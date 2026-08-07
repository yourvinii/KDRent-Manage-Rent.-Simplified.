import httpClient from "./httpClient";

export const getAdminStats = () => httpClient.get("/admin/stats");
export const getUsers = () => httpClient.get("/admin/users");
export const toggleUserBlock = (id) => httpClient.patch(`/admin/users/${id}/block`);
export const removeUser = (id) => httpClient.delete(`/admin/users/${id}`);
export const getAdminProperties = () => httpClient.get("/admin/properties");
export const getAdminInquiries = () => httpClient.get("/admin/inquiries");
export const getPendingSellers = () => httpClient.get("/admin/pending-sellers");
export const approveSeller = (id) => httpClient.patch(`/admin/approve-seller/${id}`);
