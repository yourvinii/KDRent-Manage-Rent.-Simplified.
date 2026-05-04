import { Router } from "express";
const wishlistRouter = Router();
import { protect } from "../middlewares/auth.middleware.js";
import {
  addWishlist,
  getWishlist,
  removeWishlist,
} from "../controllers/wishlist.controller.js";

wishlistRouter.route("/:propertyId").post(protect, addWishlist);
wishlistRouter.route("/").get(protect, getWishlist);
wishlistRouter.route("/:propertyId").delete(protect, removeWishlist);

export default wishlistRouter;
