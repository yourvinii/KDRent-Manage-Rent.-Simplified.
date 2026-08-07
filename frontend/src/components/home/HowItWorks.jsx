const HowItWorks = () => {
  return <section className="bg-white py-20"><div className="page-shell"><p className="eyebrow">Simple from start to finish</p><h2 className="section-title mt-2">Rent in three easy steps</h2><div className="mt-9 grid gap-5 md:grid-cols-3">{[["01","Explore verified properties"],["02","Connect with owners"],["03","Move with confidence"]].map(([number, text]) => <div key={number} className="surface p-6"><span className="text-3xl font-black text-emerald-600">{number}</span><h3 className="mt-8 text-lg font-bold">{text}</h3><p className="mt-2 text-sm leading-6 text-slate-500">Everything you need is kept clear, secure, and in one place.</p></div>)}</div></div></section>;
};

export default HowItWorks;
