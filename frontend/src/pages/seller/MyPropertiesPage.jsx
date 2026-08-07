import { useEffect, useState } from "react";
import { deleteProperty, getMyProperties } from "../../api/property.api";
import PropertyCard from "../../components/property/PropertyCard";

const MyPropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState("");
  const load = () => getMyProperties().then(({ data }) => setProperties(data.properties || [])).catch(() => setError("Could not load your properties."));
  useEffect(load, []);
  const remove = async (id) => { if (window.confirm("Delete this property?")) { await deleteProperty(id); load(); } };
  return <section className="page-shell py-12"><p className="eyebrow">Owner workspace</p><h1 className="section-title mt-2">My properties</h1>{error && <p className="mt-5 text-rose-700">{error}</p>}<div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{properties.map((property) => <div key={property._id}><PropertyCard property={property} /><button onClick={() => remove(property._id)} className="mt-2 text-sm font-bold text-rose-700">Delete listing</button></div>)}</div>{!error && !properties.length && <p className="mt-7 text-slate-500">No properties yet.</p>}</section>;
};

export default MyPropertiesPage;
