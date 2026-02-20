import express from "express";
const router = express.Router();

import verifyToken from "../middleware/authMiddleware.js";
import ownerController from "../controllers/ownerController.js";

router.get("/dashboard", verifyToken, ownerController.ownerDashboard);

export default router;
