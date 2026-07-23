import React from "react";
import StatsCard from "../common/StatsCard";

const StatsSection = () => {
    
  const stats = [
    {
      id: 1,
      number: "500+",
      label: "Properties",
    },
    {
      id: 2,
      number: "100+",
      label: "Owners",
    },
    {
      id: 3,
      number: "2000+",
      label: "Users",
    },
    {
      id: 4,
      number: "24/7",
      label: "Support",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 ">
      <h3 className="font-semibold text-2xl">Our Achievements</h3>
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {
stats.map((s)=>(
    <StatsCard
    number={s.number}
    label={s.label}
    />
))
        }
      </div>
    </section>
  );
};

export default StatsSection;
