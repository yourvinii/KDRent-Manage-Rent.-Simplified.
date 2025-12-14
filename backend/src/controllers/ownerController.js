import User from "../models/User.js";
import Property from "../models/Property.js";

const ownerDashboard = async (req, res) => {
  try {
    const ownerId = req.user._id;

    //Get owner info
    const owner = await User.findById(ownerId).select("name email");
    if (!owner) {
      return res.status(404).json({ success: false, message: "Owner not found" });
    }

    //count Properties
    const propertyCount = await Property.countDocuments({ ownerId: ownerId });

    return res.json({ success: true, owner, totalProperties: propertyCount });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default { ownerDashboard };
