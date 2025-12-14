import express from "express";
const router = express.Router();

import verifyToken from "../middleware/authMiddleware.js";
import tenantController from "../controllers/tenantController.js";

router.post("/create", verifyToken, tenantController.createTenant);
router.get(
  "/property/:propertyId",
  verifyToken,
  tenantController.getTenantsByPropertyId
);

router.get("/:tenantId", verifyToken, tenantController.getSingleTenant);

export default router;
