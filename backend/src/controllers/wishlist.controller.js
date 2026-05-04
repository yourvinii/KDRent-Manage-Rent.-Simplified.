import Wishlist from "../models/wishlist.model.js";

export const addWishlist = async (req, res) => {
  try {
    const propertyId = req.params.propertyId;

    const existing = await Wishlist.findOne({
      user: req.user._id,
      property: propertyId,
    });

    if (existing) {
      return res.json({
        success: true,
        message: "already in wishlist",
      });
    }

    await Wishlist.create({
      user: req.user._id,
      property: propertyId,
    });

    return res.json({
      success: true,
      message: "Property added to wishlist",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//to get the properties which are in wishlist
export const getWishlist = async (req, res) => {
  try {
    const data = await Wishlist.find({
      user: req.user._id,
    }).populate("property");

    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const removeWishlist = async (req, res) => {
  try {
    const propertyId = req.params.propertyId;
    const result = await Wishlist.findOneAndDelete({
      user: req.user._id,
      property: propertyId,
    });

    if (!result) {
      return res.json({
        success: false,
        message: "Wishlist item is not found",
      });
    }

    return res.json({
      success: true,
      message: "Property removed from wishlist",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
