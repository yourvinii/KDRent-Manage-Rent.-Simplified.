import app from "./app.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 5000;

// /* ---------- Start Server ---------- */
const startServer = async () => {
  try {
    
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
    await connectDB();
  } catch (error) {
    console.log("❌ Server Failed to start", error.message);
    process.exit(1);
  }
};

startServer();
