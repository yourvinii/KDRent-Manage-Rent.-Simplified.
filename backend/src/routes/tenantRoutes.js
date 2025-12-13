import express from "express";
const router = express.Router();

import verifyToken from "../middleware/authMiddleware.js";
import createTenant from "../controllers/tenantController.js";

router.post("/create", verifyToken, createTenant);

export default router;
