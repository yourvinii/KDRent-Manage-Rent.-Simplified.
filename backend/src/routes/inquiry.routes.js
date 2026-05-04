import { Router } from "express";
import { protect, authorize } from "../middlewares/auth.middleware.js";
import {
  getSellerInquiry,
  markAsRead,
  sendInquiry,
} from "../controllers/inquiry.controller.js";

const inquiryRouter = Router();

inquiryRouter.route("/").post(protect, authorize("buyer"), sendInquiry);
inquiryRouter
  .route("/seller")
  .get(protect, authorize("seller"), getSellerInquiry);

inquiryRouter.route("/:id/read").patch(protect, markAsRead);

export default inquiryRouter;
