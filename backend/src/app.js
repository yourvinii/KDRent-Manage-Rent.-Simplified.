import express from "express";
import cors from "cors";
const app = express();

// // routes
import authRoutes from "./routes/authRoutes.js";

// /* ---------- Global Middlewares ---------- */
app.use(cors());
app.use(express.json()); // to read JSON body
app.use(express.urlencoded({ extended: true }));

// /* ---------- Routes ---------- */
app.use("/api/auth/", authRoutes);

// /* ---------- Health Check ---------- */
app.get("/data", (req, res) => {
  return res
    .status(500)
    .json({ success: true, message: "KDRent API running 🚀" });
});

export default app;
