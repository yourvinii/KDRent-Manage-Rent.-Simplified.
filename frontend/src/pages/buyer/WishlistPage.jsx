import { useEffect, useState } from "react";
import { getWishlist, removeFromWishlist } from "../../api/wishlist.api";
import PropertyCard from "../../components/property/PropertyCard";

const WishlistPage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const load = () => getWishlist().then(({ data }) => setItems(data.data || [])).catch(() => setError("Could not load saved properties."));
  useEffect(load, []);
  const remove = async (id) => { await removeFromWishlist(id); load(); };
  return <section className="page-shell py-12"><p className="eyebrow">Buyer workspace</p><h1 className="section-title mt-2">Saved properties</h1>{error && <p className="mt-5 text-rose-700">{error}</p>}<div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map(({ _id, property }) => property && <div key={_id}><PropertyCard property={property} /><button onClick={() => remove(property._id)} className="mt-2 text-sm font-bold text-rose-700">Remove from saved</button></div>)}</div>{!error && !items.length && <p className="mt-7 text-slate-500">You have not saved any properties yet.</p>}</section>;
};

export default WishlistPage;
