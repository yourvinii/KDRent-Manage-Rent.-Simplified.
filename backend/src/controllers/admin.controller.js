import User from "../models/user.model.js";
import Property from "../models/property.model.js";
import Inquiry from "../models/inquiry.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    return res.json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const blockUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.isBlocked = !user.isBlocked;
    await user.save();

    return res.json({
      success: true,
      message: user.isBlocked ? "User Blocked" : "User Unblocked",
      isBlocked: user.isBlocked,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// to delete a particular user
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    return res.json({
      success: true,
      message: "User deleted successfully!",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// view all properties
export const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find().populate("seller", "name email");
    return res.json({
      success: true,
      count: properties.length,
      properties,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// to delete a particular property
export const deleteProperty = async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    return res.json({
      success: true,
      message: "Property Deleted successfully",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// to view all inquiries
export const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find()
      .populate("buyer", "name email")
      .populate("seller", "name email")
      .populate("property", "title price")
      .sort({ createdAt: -1 });

    return res.json({
      success: true,
      count: inquiries.count,
      inquiries,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const totalProperties = await Property.countDocuments();

    const activeListing = await Property.countDocuments({
      status: "sale",
    });

    const soldProperties = await Property.countDocuments({
      status: "sold",
    });

    return res.json({
      totalUsers,
      totalProperties,
      activeListing,
      soldProperties,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// to get pending seller account
export const getPendingSellers = async (req, res) => {
  try {
    const pendingSellers = await User.find({
      role: "seller",
      isApproved: false,
    }).select("-password");
    // if you are the seller, you'll get the aproval from the admin panel

    res.json({
      success: true,
      count: pendingSellers.length,
      pendingSellers,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// now to approve a seller
export const approveSeller = async (req, res) => {
  try {
    const seller = await User.findById(req.params.id);

    if (!seller || seller.role !== "seller") {
      return res.json({
        success: false,
        message: "You are not seller , seller not found",
      });
    }
    seller.isApproved = true;
    await seller.save();

    return res.json({
      success: true,
      message: "seller approved successfully",
      seller,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
