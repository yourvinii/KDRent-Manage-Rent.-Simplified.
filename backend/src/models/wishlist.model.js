import mongoose from "mongoose";
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  property: {
    type: Schema.Types.ObjectId,
    ref: "Property",
  },
});

export default mongoose.model("Wishlist", wishlistSchema);
