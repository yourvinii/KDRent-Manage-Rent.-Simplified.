import PropertySearch from "../property/PropertySearch";

const HeroSection = () => {
  return <section className="bg-slate-950 py-18 text-white"><div className="page-shell grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr]"><div><p className="eyebrow text-emerald-300">Home, made simple</p><h1 className="mt-4 max-w-2xl text-5xl font-black tracking-tight sm:text-6xl">Find a place that feels like yours.</h1><p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">Search verified rental properties, talk directly with owners, and move with confidence.</p><PropertySearch /></div><div className="hidden min-h-95 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,#6ee7b7,transparent_25%),linear-gradient(135deg,#0f766e,#172033)] p-8 lg:block"><div className="mt-50 rounded-2xl bg-white/95 p-5 text-slate-900 shadow-2xl"><p className="text-sm font-bold text-emerald-700">Recommended for you</p><p className="mt-2 text-xl font-black">Homes near your favourite places.</p></div></div></div></section>;
};

export default HeroSection;
