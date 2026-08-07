const PropertyFilters = () => {
  return <aside className="surface h-fit p-5"><p className="font-bold">Filter properties</p><div className="mt-5 space-y-4">{["Location","Property type","Monthly budget","Bedrooms"].map((label) => <label key={label} className="block text-sm font-bold text-slate-600">{label}<select className="mt-2 w-full rounded-lg border border-slate-200 bg-white p-2.5 font-normal text-slate-500"><option>Any {label.toLowerCase()}</option></select></label>)}</div><button className="mt-5 w-full rounded-lg bg-emerald-600 py-2.5 text-sm font-bold text-white">Apply filters</button></aside>;
};

export default PropertyFilters;
