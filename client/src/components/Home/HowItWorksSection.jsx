import React from "react";
import FeaturesCard from "../common/FeaturesCard";

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      icon: "🔍",
      title: "Search Property",
      description: "Browse properties based on location and budget.",
    },
    {
      id: 2,
      icon: "🏠",
      title: "View Details",
      description: "Check images, price and complete information.",
    },
    {
      id: 3,
      icon: "💬",
      title: "Chat With Owner",
      description: "Connect directly with owners in real time.",
    },
    {
      id: 4,
      icon: "🎉",
      title: "Rent Property",
      description: "Finalize the deal and move into your new home.",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 ">
      <h3 className="font-semibold text-2xl mb-5">How it Works?</h3>
     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
       {steps.map((s) => (
        <FeaturesCard
          icon={s.icon}
          title={s.title}
          description={s.description}
        />
      ))}
     </div>
    </section>
  );
};

export default HowItWorksSection;
