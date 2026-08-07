import { useEffect, useState } from "react";
import { getProperties } from "../../api/property.api";
import PropertyCard from "./PropertyCard";

const PropertyGrid = () => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getProperties().then(({ data }) => setProperties(data.properties || [])).catch(() => setError("Properties are unavailable right now."));
  }, []);

  if (error) return <p className="mt-8 text-sm text-slate-500">{error}</p>;
  if (!properties.length) return <p className="mt-8 text-sm text-slate-500">Loading available homes…</p>;
  return <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{properties.map((property) => <PropertyCard key={property._id} property={property} />)}</div>;
};

export default PropertyGrid;
