import Property from "../models/Property.js";
import Tenant from "../models/Tenant.js";

const createTenant = async (req, res) => {
  try {
    const { propertyId, name, phone, email, monthlyRent, moveInDate } =
      req.body;

    // Check Empty field
    if (!propertyId || !name || !phone || !moveInDate) {
      return res
        .status(400)
        .json({ success: false, message: "Required Filed Missing" });
    }

    //check if property exists
    const property = await Property.findById(propertyId);
    if (!property) {
      return res
        .status(404)
        .json({ success: false, message: "Property not found" });
    }

    //verify property belongs to the logged in user
    if (property.ownerId.toString() !== req.user._id) {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to add tenant to this property",
      });
    }

    //create tenant
    const tenant = await Tenant.create({
      propertyId,
      name,
      phone,
      email,
      monthlyRent,
      moveInDate,
    });

    return res.json({
      success: true,
      message: "Tenant added Successfully",
      tenant,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};















export default createTenant;
