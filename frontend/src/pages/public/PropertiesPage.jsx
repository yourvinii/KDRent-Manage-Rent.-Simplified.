import PropertyFilters from "../../components/property/PropertyFilters";
import PropertyGrid from "../../components/property/PropertyGrid";

const PropertiesPage = () => {
  return <section className="page-shell py-14"><p className="eyebrow">Browse homes</p><h1 className="section-title mt-2">Find a home you will love</h1><p className="mt-3 text-slate-500">Explore verified rental listings across your favourite localities.</p><div className="mt-8 grid gap-6 lg:grid-cols-[260px_1fr]"><PropertyFilters /><div><div className="flex items-center justify-between"><p className="font-bold">128 homes available</p><button className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold">Sort: Recommended</button></div><PropertyGrid /></div></div></section>;
};

export default PropertiesPage;
