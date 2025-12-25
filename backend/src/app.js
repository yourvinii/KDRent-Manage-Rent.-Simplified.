import express from "express";
import cors from "cors";
const app = express();

// /* ---------- Global Middlewares ---------- */


app.use(cors({
  origin: "http://localhost:5173", //  frontend URL
  credentials: true,               // allow cookies
}));

app.use(express.json()); // to read JSON body
app.use(express.urlencoded({ extended: true }));

// // routes
import authRoutes from "./routes/authRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import tenantRoutes from "./routes/tenantRoutes.js";
import ownerRouters from "./routes/ownerRoutes.js";

// /* ----------Middleware & Routes ---------- */
app.use("/api/auth", authRoutes);
app.use("/api/property", propertyRoutes);
app.use("/api/tenant", tenantRoutes);
app.use("/api/owner", ownerRouters);

// /* ---------- Health Check ---------- */
app.get("/data", (req, res) => {
  return res
    .status(500)
    .json({ success: true, message: "KDRent API running 🚀" });
});

export default app;
