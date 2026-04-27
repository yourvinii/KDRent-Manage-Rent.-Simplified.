import { Router } from "express";
import { protect } from "../middlewares/auth.middleware.js";
import {
  login,
  register,
  getMe,
  verifyEmail,
  forgotPassword,
  resetPassword,
} from "../controllers/auth.controller.js";
const authRouter = Router();

authRouter.route("/register").post(register);
authRouter.route("/login").post(login);
authRouter.route("/me").get(protect, getMe);
authRouter.route("/verify-email").post(verifyEmail);
authRouter.route("/forget-password").post(forgotPassword);
authRouter.route("/reset-password/:token").post(resetPassword);

export default authRouter;
