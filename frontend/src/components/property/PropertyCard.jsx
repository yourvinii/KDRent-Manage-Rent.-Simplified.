import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const image = property?.images?.[0];
  return <article className="surface overflow-hidden"><div className="grid h-48 place-items-center bg-gradient-to-br from-emerald-100 via-teal-50 to-slate-100 text-sm font-bold text-emerald-700">{image ? <img src={image} alt={property.title} className="h-full w-full object-cover" /> : "Property image"}</div><div className="p-5"><div className="flex items-start justify-between gap-3"><div><p className="font-bold text-slate-900">{property?.title || "Modern 2 BHK Apartment"}</p><p className="mt-1 text-sm text-slate-500">{property ? `${property.area}, ${property.city}` : "Whitefield, Bengaluru"}</p></div><span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700">Verified</span></div><div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4"><p className="text-lg font-extrabold text-slate-900">₹{Number(property?.price || 25000).toLocaleString("en-IN")} <span className="text-xs font-medium text-slate-400">/ month</span></p><Link to={property ? `/properties/${property._id}` : "/properties"} className="text-sm font-bold text-emerald-700">View</Link></div></div></article>;
};

export default PropertyCard;
