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
        .json({ success: false, message: "Required Field Missing" });
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

//get tenant by property Id
const getTenantsByPropertyId = async (req, res) => {
  try {
    const { propertyId } = req.params;

    //check property Exists
    const property = await Property.findById(propertyId);
    if (!property) {
      res.status(404).json({ success: false, message: "Property not found" });
    }

    //Check property belongs to logged in user
    if (property.ownerId.toString() !== req.user._id) {
      res.status(403).json({ success: false, message: "Access Denied" });
    }

    //get tenant of this property
    const tenants = await Tenant.find({ propertyId }).select(
      "name phone moveInDate"
    );

    res.json({
      success: true,
      tenants,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getSingleTenant = async (req, res) => {
  try {
    const {tenantId} = req.params;

    //check tenant exist
    const tenant = await Tenant.findById(tenantId);
    if (!tenant) {
      return res
        .status(404)
        .json({ success: false, message: "Tenant not found" });
    }

    //check property linked
    const property = await Property.findById(tenant.propertyId);
    if (!property) {
      return res
        .status(404)
        .json({ success: false, message: "Property not found" });
    }

    //check owner
    if (property.ownerId.toString() !== req.user._id) {
      return res.status(403).json({ success: false, message: "Access Denied" });
    }

    return res.json({ success: true, tenant });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default { createTenant, getTenantsByPropertyId, getSingleTenant };
