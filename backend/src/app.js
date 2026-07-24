import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";

dotenv.config();

// Routes
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import propertyRouter from "./routes/property.routes.js";
import inquiryRouter from "./routes/inquiry.routes.js";
import wishlistRouter from "./routes/wishlist.routes.js";
import contactRouter from "./routes/contact.routes.js";
import adminRouter from "./routes/admin.routes.js";
import chatRouter from "./routes/chat.routes.js";

const app = express();

/* =========================
        Middlewares
========================= */

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

/* =========================
          Routes
========================= */

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/property", propertyRouter);
app.use("/api/inquiry", inquiryRouter);
app.use("/api/wishlist", wishlistRouter);
app.use("/api/contact", contactRouter);
app.use("/api/admin", adminRouter);
app.use("/api/chat", chatRouter);

/* =========================
        Socket.io
========================= */

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User Connected :", socket.id);

  socket.on("joinChat", (chatId) => {
    socket.join(chatId);
  });

  socket.on("sendMessage", (data) => {
    io.to(data.chatId).emit("receiveMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected :", socket.id);
  });
});

export { app, server, io };

export default app;