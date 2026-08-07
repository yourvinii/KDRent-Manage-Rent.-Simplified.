import httpClient from "./httpClient";

export const sendInquiry = (payload) => httpClient.post("/inquiry", payload);
export const getSellerInquiries = () => httpClient.get("/inquiry/seller");
export const markInquiryRead = (id) => httpClient.patch(`/inquiry/${id}/read`);
