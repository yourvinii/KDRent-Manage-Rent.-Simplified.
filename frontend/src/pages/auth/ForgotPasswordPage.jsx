import { useState } from "react";
import { forgotPassword } from "../../api/auth.api";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const submit = async (event) => { event.preventDefault(); setError(""); try { const { data } = await forgotPassword({ email }); setNotice(data.message); } catch (requestError) { setError(requestError.response?.data?.message || "Could not send reset email."); } };
  return <section className="page-shell grid min-h-[68vh] place-items-center py-14"><form onSubmit={submit} className="surface w-full max-w-md p-7"><p className="eyebrow">Account recovery</p><h1 className="mt-2 text-3xl font-black">Reset password</h1>{notice && <p className="mt-4 text-sm text-emerald-700">{notice}</p>}{error && <p className="mt-4 text-sm text-rose-700">{error}</p>}<input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="mt-6 w-full rounded-xl border border-slate-200 p-3" /><button className="mt-5 w-full rounded-xl bg-slate-900 py-3 font-bold text-white">Send reset link</button></form></section>;
};

export default ForgotPasswordPage;
