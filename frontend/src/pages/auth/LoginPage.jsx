import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); setError(""); setIsSubmitting(true);
    try { await login(form); navigate(location.state?.from?.pathname || "/"); }
    catch (requestError) { setError(requestError.response?.data?.message || "Could not log in. Please try again."); }
    finally { setIsSubmitting(false); }
  };

  return <section className="page-shell grid min-h-[68vh] place-items-center py-14"><form onSubmit={handleSubmit} className="surface w-full max-w-md p-7"><p className="eyebrow">Welcome back</p><h1 className="mt-2 text-3xl font-black">Log in to KDRent</h1><p className="mt-2 text-sm text-slate-500">Manage your saved homes and listings.</p>{error && <p className="mt-4 rounded-lg bg-rose-50 p-3 text-sm font-medium text-rose-700">{error}</p>}<label className="mt-6 block text-sm font-bold">Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 p-3 outline-emerald-500" /></label><label className="mt-4 block text-sm font-bold">Password<input required type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="mt-2 w-full rounded-xl border border-slate-200 p-3 outline-emerald-500" /></label><div className="mt-3 text-right"><Link to="/forgot-password" className="text-sm font-bold text-emerald-700">Forgot password?</Link></div><button disabled={isSubmitting} className="mt-6 w-full rounded-xl bg-slate-900 py-3 font-bold text-white disabled:opacity-60">{isSubmitting ? "Logging in…" : "Log in"}</button><p className="mt-5 text-center text-sm text-slate-500">New here? <Link to="/register" className="font-bold text-emerald-700">Create an account</Link></p></form></section>;
};

export default LoginPage;
