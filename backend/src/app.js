import express from "express";
import cors from "cors";

// routes
import authRouter from "./routes/auth.routes.js";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// routes
app.get("/", (req, res) => {
  res.send("working ");
});

app.use("/api/auth", authRouter);
export default app;
