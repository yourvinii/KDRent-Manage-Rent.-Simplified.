import Property from "../models/Property.js";

// Create Property (Only logged-in users)
const createProperty = async (req, res) => {
  try {
    const { title, address, city, country, monthlyRent } = req.body;

    if (!title || !address || !city || !country || !monthlyRent) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const property = await Property.create({
      ownerId: req.user._id, // coming from JWT middleware
      title,
      address,
      city,
      country,
      monthlyRent,
    });

    return res.status(201).json({
      success: true,
      message: "Property Added successfully",
      property,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Properties

const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find({ ownerId: req.user._id }).populate(
      "ownerId",
      "name email"
    );

    return res.status(200).json({
      success: true,
      count: properties.length,
      properties,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Get Single Property

const getProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate(
      "ownerId",
      "name email"
    );
    if (!property) {
      return res
        .status(400)
        .json({ success: false, message: "Not property found" });
    }
    return res.json({ success: true, property });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getMyProperties = async (req, res) => {
  try {
    //req.user.id is coming from JWT middleware
    const properties = await Property.find({
      ownerId: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      coutn: properties.length,
      properties,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    //ownership check
    if (property.owner.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to update this property",
      });
    }

    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: "Property updated successfully",
      property: updatedProperty,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE /api/properties/:id
const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    // 🔐 Ownership check
    if (property.owner.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to delete this property",
      });
    }

    await property.deleteOne();

    res.status(200).json({
      success: true,
      message: "Property deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default {
  createProperty,
  getAllProperties,
  getProperty,
  getMyProperties,
  updateProperty,
  deleteProperty,
};
