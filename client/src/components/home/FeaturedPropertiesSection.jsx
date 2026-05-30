import React from "react";
import dummyProperties from "../../utils/dummyProperties";
import PropertyCard from "../cards/PropertyCard";
const FeaturedPropertiesSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold">Featured Properties</h2>
        <div className=" grid md:grid-cols-3 gap-6 mt-10 ">
          {dummyProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
