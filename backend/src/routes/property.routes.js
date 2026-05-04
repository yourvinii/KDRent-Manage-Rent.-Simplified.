import { Router } from "express";
import {
  addProperty,
  deleteProperty,
  getAllProperties,
  getMyProperties,
  getPropertyCount,
  getPropertyDetails,
  getSellerDashboard,
  updateProperty,
  updatePropertyStatus,
} from "../controllers/property.controller.js";
import { authorize, protect } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/upload.middleware.js";

const propertyRouter = Router();

propertyRouter.route("/").get(getAllProperties);

// protect the routes that only seller can do these works
propertyRouter.post(
  "/",
  protect,
  authorize("seller"),
  upload.array("images", 10),
  addProperty,
);
propertyRouter.get("/my", protect, authorize("seller"), getMyProperties);
propertyRouter.put(
  "/:id",
  protect,
  authorize("seller"),
  upload.array("images", 10),
  updateProperty,
);

propertyRouter.delete("/:id", protect, authorize("seller"), deleteProperty);
propertyRouter.patch(
  "/:id/status",
  protect,
  authorize("seller"),
  updatePropertyStatus,
);

propertyRouter.get("/counts", getPropertyCount);
propertyRouter.get("/:id", getPropertyDetails);

propertyRouter.get(
  "/seller/dashboard",
  protect,
  authorize("seller"),
  getSellerDashboard,
);

export default propertyRouter;
