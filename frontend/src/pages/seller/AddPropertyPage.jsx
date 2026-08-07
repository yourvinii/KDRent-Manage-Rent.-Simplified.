import { useState } from "react";
import { createProperty } from "../../api/property.api";

const AddPropertyPage = () => {
  const [form, setForm] = useState({ title: "", description: "", price: "", city: "", area: "", pincode: "", propertyType: "apartment", bhk: "1", bathrooms: "1", areaSize: "", furnishing: "semi-furnished", status: "sale" });
  const [images, setImages] = useState([]);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const submit = async (event) => {
    event.preventDefault(); setError(""); setNotice("");
    const payload = new FormData();
    Object.entries(form).forEach(([key, value]) => payload.append(key, value));
    Array.from(images).forEach((image) => payload.append("images", image));
    try { await createProperty(payload); setNotice("Property created successfully."); }
    catch (requestError) { setError(requestError.response?.data?.message || "Could not create property."); }
  };
  return <section className="page-shell py-12"><p className="eyebrow">Owner workspace</p><h1 className="section-title mt-2">Add a property</h1><form onSubmit={submit} className="surface mt-7 grid gap-4 p-6 md:grid-cols-2">{notice && <p className="md:col-span-2 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">{notice}</p>}{error && <p className="md:col-span-2 rounded-lg bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}{[["title","Property title","text"],["price","Monthly rent","number"],["city","City","text"],["area","Area / locality","text"],["pincode","Pincode","text"],["areaSize","Area size (sq ft)","number"],["bhk","BHK","text"],["bathrooms","Bathrooms","number"]].map(([name,label,type]) => <label key={name} className="text-sm font-bold">{label}<input required={["title","price","city","area","pincode"].includes(name)} type={type} value={form[name]} onChange={(e) => setForm({ ...form, [name]: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 p-3" /></label>)}<label className="text-sm font-bold">Property type<select value={form.propertyType} onChange={(e) => setForm({ ...form, propertyType: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3">{["apartment","villa","house","studio","office","commercial"].map((type) => <option key={type}>{type}</option>)}</select></label><label className="text-sm font-bold">Furnishing<select value={form.furnishing} onChange={(e) => setForm({ ...form, furnishing: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3">{["furnished","semi-furnished","unfurnished"].map((type) => <option key={type}>{type}</option>)}</select></label><label className="md:col-span-2 text-sm font-bold">Description<textarea required value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="mt-2 min-h-30 w-full rounded-xl border border-slate-200 p-3" /></label><label className="md:col-span-2 text-sm font-bold">Property images (up to 10)<input type="file" accept="image/*" multiple onChange={(e) => setImages(e.target.files)} className="mt-2 block text-sm" /></label><button className="md:col-span-2 rounded-xl bg-emerald-600 py-3 font-bold text-white">Publish property</button></form></section>;
};

export default AddPropertyPage;
