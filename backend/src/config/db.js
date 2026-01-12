import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ DB Connected");
  } catch (error) {
    console.log("❌ Error connecting DB : ", error);
  }
};

export default connectDB;
