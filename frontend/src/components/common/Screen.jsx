const Screen = ({ title, description }) => {
  return <section className="page-shell py-14"><p className="eyebrow">KDRent workspace</p><h1 className="section-title mt-2">{title}</h1><p className="mt-3 max-w-2xl text-slate-500">{description}</p><div className="surface mt-8 p-6"><div className="grid gap-4 sm:grid-cols-3">{["Overview","Recent activity","Next action"].map((item) => <div key={item} className="rounded-xl bg-slate-50 p-5"><p className="text-sm font-bold text-slate-900">{item}</p><p className="mt-2 text-sm leading-6 text-slate-500">This screen is ready for its backend data and actions.</p></div>)}</div></div></section>;
};

export default Screen;
