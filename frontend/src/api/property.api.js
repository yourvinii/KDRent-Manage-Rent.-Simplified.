import httpClient from "./httpClient";

export const getProperties = (params) => httpClient.get("/property", { params });
export const getProperty = (id) => httpClient.get(`/property/${id}`);
export const getMyProperties = () => httpClient.get("/property/my");
export const createProperty = (payload) => httpClient.post("/property", payload);
export const updateProperty = (id, payload) => httpClient.put(`/property/${id}`, payload);
export const deleteProperty = (id) => httpClient.delete(`/property/${id}`);
export const updatePropertyStatus = (id, payload) => httpClient.patch(`/property/${id}/status`, payload);
export const getSellerDashboard = () => httpClient.get("/property/seller/dashboard");
