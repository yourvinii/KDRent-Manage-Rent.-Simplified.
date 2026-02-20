import mongoose from "mongoose";
const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    monthlyRent: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Property", propertySchema);
