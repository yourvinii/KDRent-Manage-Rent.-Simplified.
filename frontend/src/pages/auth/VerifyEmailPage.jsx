import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { verifyEmail } from "../../api/auth.api";

const VerifyEmailPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const submit = async (event) => {
    event.preventDefault(); setError("");
    try { const { data } = await verifyEmail({ email, code }); setNotice(data.message); setTimeout(() => navigate("/login"), 1000); }
    catch (requestError) { setError(requestError.response?.data?.message || "Could not verify email."); }
  };
  return <section className="page-shell grid min-h-[68vh] place-items-center py-14"><form onSubmit={submit} className="surface w-full max-w-md p-7"><p className="eyebrow">One last step</p><h1 className="mt-2 text-3xl font-black">Verify your email</h1><p className="mt-2 text-sm text-slate-500">Enter the six-digit code sent to your email.</p>{notice && <p className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">{notice}</p>}{error && <p className="mt-4 rounded-lg bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}<input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="mt-6 w-full rounded-xl border border-slate-200 p-3" /><input required inputMode="numeric" maxLength="6" value={code} onChange={(e) => setCode(e.target.value)} placeholder="6-digit code" className="mt-4 w-full rounded-xl border border-slate-200 p-3 tracking-[.4em]" /><button className="mt-5 w-full rounded-xl bg-emerald-600 py-3 font-bold text-white">Verify email</button><p className="mt-5 text-center text-sm"><Link to="/login" className="font-bold text-emerald-700">Back to login</Link></p></form></section>;
};

export default VerifyEmailPage;
