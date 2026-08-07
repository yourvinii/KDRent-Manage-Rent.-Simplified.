import PropertyGrid from "../property/PropertyGrid";

const FeaturedProperties = () => {
  return <section className="page-shell py-20"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Hand-picked homes</p><h2 className="section-title mt-2">Featured properties</h2></div><a href="/properties" className="font-bold text-emerald-700">View all homes →</a></div><PropertyGrid /></section>;
};

export default FeaturedProperties;
