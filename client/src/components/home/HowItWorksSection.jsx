import React from "react";

const HowItWorksSection = () => {
  return (
    <section className=" py-20">
      <div className=" max-w-7xl mx-auto px-6 ">
        <h2 className=" text-4xl font-bold text-center ">How It Works</h2>
        <div className=" grid md:grid-cols-4 gap-6 mt-10 ">
          <div>1. Search</div>
          <div>2. View Details</div>
          <div>3. Chat With Owner</div>
          <div>4. Rent Property</div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
