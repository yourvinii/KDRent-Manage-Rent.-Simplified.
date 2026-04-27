import { Router } from "express";
import {
  getProfile,
  getPublicProfile,
  updateProfile,
} from "../controllers/user.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/upload.middleware.js";

const userRouter = Router();

userRouter.route("/profile").get(protect, getProfile);
userRouter.route("/public/:id").get( getPublicProfile);
userRouter
  .route("/profile")
  .put(protect, upload.single("profilePic"), updateProfile);

export default userRouter;
