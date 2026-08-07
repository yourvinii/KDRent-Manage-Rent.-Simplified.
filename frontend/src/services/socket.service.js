import { io } from "socket.io-client";
import { getToken } from "../utils/storage";

let socket;

export const connectSocket = () => {
  if (!socket) {
    // API URL ends with /api, while Socket.IO connects to the server origin.
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
    const serverUrl = apiUrl.replace(/\/api\/?$/, "");
    socket = io(serverUrl, { auth: { token: getToken() } });
  }
  return socket;
};

export const disconnectSocket = () => {
  socket?.disconnect();
  socket = undefined;
};
