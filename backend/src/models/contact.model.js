import mongoose from "mongoose";
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    role: {
      type: String,
      enum: ["buyer", "seller"],
    },
    message: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Contact", contactSchema);
