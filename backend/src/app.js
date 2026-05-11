import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

// routes
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import propertyRouter from "./routes/property.routes.js";
import inquiryRouter from "./routes/inquiry.routes.js";
import wishlistRouter from "./routes/wishlist.routes.js";
import contactRouter from "./routes/contact.routes.js";
import adminRouter from "./routes/admin.routes.js";
import chatRouter from "./routes/chat.routes.js";

const app = express();
const allowedOrigins = ["http://localhost:5173"].filter(Boolean);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

// routes
app.get("/", (req, res) => {
  res.send("working ");
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/property", propertyRouter);
app.use("/api/inquiry", inquiryRouter);
app.use("/api/wishlist", wishlistRouter);
app.use("/api/contact", contactRouter);
app.use("/api/admin", adminRouter);
app.use("/api/chat", chatRouter);

const server = http.createServer(app);
// socket.id setup

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("joinChat", (chatId) => {
    socket.json(chatId);
  });
  socket.on("sendMessage", (data) => {
    io.to(data.chatId).emit("receiveMessage", data);
  });
  socket.on("disconnect", () => {});
});

export default app;
