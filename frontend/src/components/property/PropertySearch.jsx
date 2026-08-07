const PropertySearch = () => {
  return <form className="mt-7 grid gap-3 rounded-2xl bg-white p-3 shadow-xl shadow-slate-900/10 md:grid-cols-[1fr_1fr_auto]"><label className="rounded-xl border border-slate-200 px-4 py-2 text-left"><span className="block text-xs font-bold text-slate-400">Location</span><input className="w-full outline-none" placeholder="City or locality" /></label><label className="rounded-xl border border-slate-200 px-4 py-2 text-left"><span className="block text-xs font-bold text-slate-400">Property type</span><select className="w-full bg-transparent outline-none"><option>Any property</option><option>Apartment</option><option>Villa</option></select></label><button className="rounded-xl bg-emerald-600 px-7 py-3 font-bold text-white hover:bg-emerald-700">Search homes</button></form>;
};

export default PropertySearch;
