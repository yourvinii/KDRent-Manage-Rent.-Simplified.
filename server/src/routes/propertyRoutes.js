import express from "express";
const router = express.Router();

import propertyController from "../controllers/propertyController.js";

import verifyToken from "../middleware/authMiddleware.js";

// Create property
router.post("/create", verifyToken, propertyController.createProperty);

//only logged-in userRoute 

//Order Rule

// Update property
router.put("/:id", verifyToken, propertyController.updateProperty);

// Delete Property
router.delete("/:id", verifyToken, propertyController.deleteProperty);

// Always keep static routes before dynamic routes
router.get("/my", verifyToken, propertyController.getMyProperties);
// //Public Routes
// router.get("/", propertyController.getAllProperties);
// router.get("/:id", propertyController.getProperty);

export default router;
