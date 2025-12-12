import express from "express";
const router = express.Router();

import propertyController from "../controllers/propertyController.js";

import verifyToken from "../middleware/authMiddleware.js";

// Protected Route → Only logged-in users can create property
router.post("/create", verifyToken, propertyController.createProperty);

//Public Routes
router.get("/", propertyController.getAllProperties);
router.get("/:id", propertyController.getProperty);

export default router;


