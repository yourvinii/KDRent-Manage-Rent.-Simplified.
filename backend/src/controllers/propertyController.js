import Property from "../models/Property.js";

// Create Property (Only logged-in users)
const createProperty = async (req, res) => {
  try {
    const { title, address, city, country, monthlyRent } = req.body;

    const property = await Property.create({
      ownerId: req.user._id, // coming from JWT middleware
      title,
      address,
      city,
      country,
      monthlyRent,
    });

    res.status(201).json({
      success: true,
      message: "Property created successfully",
      property,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Properties

const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find().populate("ownerId", "name email");

    res.status(200).json({
      success: true,
      count: properties.length,
      properties,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
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
      res.status(400).json({ success: false, message: "Not property found" });
    }
    res.json({ success: true, property });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export default {
  createProperty,
  getAllProperties,
  getProperty,
};



