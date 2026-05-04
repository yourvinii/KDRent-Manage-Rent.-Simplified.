import Property from "../models/property.model.js";
import Inquiry from "../models/inquiry.model.js";

// buyer send inquiry
export const sendInquiry = async (req, res) => {
  try {
    const { propertyId, message } = req.body;
    const property = await Property.findById(propertyId).populate("seller");

    if (!property) {
      return res.json({
        success: false,
        message: "Property not Found",
      });
    }

    const inquiry = await Inquiry.create({
      property: property._id,
      buyer: req.user._id,
      seller: property.seller._id,
      message,
    });

    return res.json({
      success: true,
      message: "Inquiry send successfully",
      inquiry,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// seller views Inquiry
export const getSellerInquiry = async (req, res) => {
  try {
    const inquires = await Inquiry.find({
      seller: req.user._id,
    })
      .populate("buyer", "name email phone")
      .populate("property", "title price images city")
      .sort({ createdAt: -1 });

    return res.json({
      success: true,
      count: inquires.length,
      inquires,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const markAsRead = async (req, res) => {
  try {
    const inquiry = await inquires.findById(req.params.id);
    if (!inquiry) {
      return res.json({
        success: false,
        message: "Inquiry not found",
      });
    }

    inquiry.isRead = true;
    await inquiry.save();

    return res.json({
      success: true,
      message: "Marked as read",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
