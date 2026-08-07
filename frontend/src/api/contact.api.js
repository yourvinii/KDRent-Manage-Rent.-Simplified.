import httpClient from "./httpClient";

export const sendContactMessage = (payload) => httpClient.post("/contact", payload);
export const getContacts = () => httpClient.get("/contact");
