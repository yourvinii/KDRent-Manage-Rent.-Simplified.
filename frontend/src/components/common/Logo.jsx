import { Link } from "react-router-dom";

const Logo = () => {
  return <Link to="/" className="flex items-center gap-2 font-black tracking-tight text-xl text-slate-900"><span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-600 text-white">K</span>KDRent</Link>;
};

export default Logo;
