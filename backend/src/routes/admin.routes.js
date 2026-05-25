import { Router } from "express";
import { authorize, protect } from "../middlewares/auth.middleware.js";
import {
    approveSeller,
  blockUser,
  deleteProperty,
  deleteUser,
  getAllInquiries,
  getAllProperties,
  getAllUsers,
  getDashboardStats,
  getPendingSellers,
} from "../controllers/admin.controller.js";
const adminRouter = Router();

adminRouter.use(protect, authorize("admin"));

adminRouter.route("/users").get(getAllUsers);

adminRouter.route("/users/:id/block").patch(blockUser);

adminRouter.route("/users/:id").delete(deleteUser);

adminRouter.route("/properties").get(getAllProperties);

adminRouter.route("/properties/:id").delete(deleteProperty);

adminRouter.route("/inquiries").get(getAllInquiries);

adminRouter.route("/stats").get(getDashboardStats);

adminRouter.route("/pending-sellers").get(getPendingSellers);

adminRouter.route("/approve-seller/:id").patch(approveSeller);

export default adminRouter;
