import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api/auth.api";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "buyer" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const handleSubmit = async (event) => {
    event.preventDefault(); setError(""); setIsSubmitting(true);
    try { const { data } = await register(form); setMessage(data.message); setTimeout(() => navigate("/login"), 1400); }
    catch (requestError) { setError(requestError.response?.data?.message || "Could not create the account."); }
    finally { setIsSubmitting(false); }
  };
  return <section className="page-shell grid min-h-[68vh] place-items-center py-14"><form onSubmit={handleSubmit} className="surface w-full max-w-md p-7"><p className="eyebrow">Join KDRent</p><h1 className="mt-2 text-3xl font-black">Create your account</h1>{message && <p className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">{message}</p>}{error && <p className="mt-4 rounded-lg bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}{[["name","Full name","text"],["email","Email","email"],["password","Password","password"]].map(([name,label,type]) => <label key={name} className="mt-4 block text-sm font-bold">{label}<input required minLength={name === "password" ? 6 : undefined} name={name} type={type} value={form[name]} onChange={update} className="mt-2 w-full rounded-xl border border-slate-200 p-3 outline-emerald-500" /></label>)}<label className="mt-4 block text-sm font-bold">I want to<select name="role" value={form.role} onChange={update} className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3"><option value="buyer">Find a home</option><option value="seller">List my property</option></select></label><button disabled={isSubmitting} className="mt-6 w-full rounded-xl bg-emerald-600 py-3 font-bold text-white disabled:opacity-60">{isSubmitting ? "Creating…" : "Create account"}</button><p className="mt-5 text-center text-sm text-slate-500">Already have an account? <Link to="/login" className="font-bold text-emerald-700">Log in</Link></p></form></section>;
};

export default RegisterPage;
