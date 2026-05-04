import { Router } from "express";
import {
  createContact,
  getAllContact,
} from "../controllers/contact.controller.js";
import { authorize, protect } from "../middlewares/auth.middleware.js";
const contactRouter = Router();

contactRouter.route("/").post(createContact);
contactRouter.route("/").get(protect, authorize("admin"), getAllContact);

export default contactRouter;
