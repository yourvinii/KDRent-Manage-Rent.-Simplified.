import mongoose from "mongoose";
const Schema = mongoose.Schema;

const tenantSchema = new Schema(
  {
    propertyId: {
      type: Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    monthlyRent: {
      type: Number,
    },
    moveInDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tenant", tenantSchema);
