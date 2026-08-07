import { useState } from "react";
import { sendContactMessage } from "../../api/contact.api";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "buyer", message: "" });
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const submit = async (event) => {
    event.preventDefault(); setError(""); setNotice("");
    try { const { data } = await sendContactMessage(form); setNotice(data.message); setForm({ name: "", email: "", phone: "", role: "buyer", message: "" }); }
    catch (requestError) { setError(requestError.response?.data?.message || "Could not send your message."); }
  };
  return <section className="page-shell grid gap-10 py-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Contact KDRent</p><h1 className="section-title mt-2">We would love to hear from you.</h1><p className="mt-4 max-w-md leading-7 text-slate-500">Tell us how we can help with your search or property listing.</p></div><form onSubmit={submit} className="surface p-7">{notice && <p className="mb-4 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">{notice}</p>}{error && <p className="mb-4 rounded-lg bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}{[["name","Name","text"],["email","Email","email"],["phone","Phone","tel"]].map(([name,label,type]) => <label key={name} className="mb-4 block text-sm font-bold">{label}<input required={name !== "phone"} type={type} value={form[name]} onChange={(e) => setForm({ ...form, [name]: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 p-3" /></label>)}<label className="mb-4 block text-sm font-bold">Message<textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2 min-h-28 w-full rounded-xl border border-slate-200 p-3" /></label><button className="rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white">Send message</button></form></section>;
};

export default ContactPage;
