import React from "react";
import FeaturesCard from "../common/FeaturesCard";

const WhyChooseUsSection = () => {
  const features = [
    {
      id: 1,
      icon: "✅",
      title: "Verified Listings",
      description: "All properties are verified before publishing.",
    },
    {
      id: 2,
      icon: "💬",
      title: "Real Time Chat",
      description: "Connect directly with owners instantly.",
    },
    {
      id: 3,
      icon: "🔒",
      title: "Secure Experience",
      description: "Safe and trusted rental platform.",
    },
    {
      id: 4,
      icon: "🤝",
      title: "Direct Owner Communication",
      description: "No middlemen involved.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h3 className="font-semibold text-2xl mb-5 ">Why Choose Us?</h3>
      <div className=" grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {features.map((f) => (
          <FeaturesCard
            icon={f.icon}
            title={f.title}
            description={f.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
