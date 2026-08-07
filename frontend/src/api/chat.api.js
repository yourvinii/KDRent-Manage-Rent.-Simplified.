import httpClient from "./httpClient";

export const startChat = (payload) => httpClient.post("/chat/start", payload);
export const getChats = () => httpClient.get("/chat/user");
export const getChat = (chatId) => httpClient.get(`/chat/${chatId}`);
export const sendMessage = (payload) => httpClient.post("/chat/send", payload);
export const deleteChat = (chatId) => httpClient.delete(`/chat/${chatId}`);
