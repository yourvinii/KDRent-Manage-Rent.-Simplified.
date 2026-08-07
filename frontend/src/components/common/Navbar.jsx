import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [["Explore", "/properties"], ["For owners", "/register"], ["Contact", "/contact"]];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="page-shell flex h-18 items-center justify-between py-3">
        <Logo />
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, to]) => <NavLink key={to} to={to} className="text-sm font-semibold text-slate-600 hover:text-emerald-700">{label}</NavLink>)}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <Link to="/login" className="px-3 py-2 text-sm font-bold text-slate-700">Log in</Link>
          <Link to="/register" className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-700">List a property</Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation" className="rounded-lg p-2 text-slate-800 md:hidden">{isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenuAlt3 size={24} />}</button>
      </nav>
      {isOpen && <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden"><div className="flex flex-col gap-3">{links.map(([label, to]) => <Link key={to} onClick={() => setIsOpen(false)} to={to} className="font-semibold text-slate-700">{label}</Link>)}<Link to="/login" className="font-semibold text-emerald-700">Log in</Link></div></div>}
    </header>
  );
};

export default Navbar;
