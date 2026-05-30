import React from "react";

const HeroSection = () => {
  return (
    <section className=" py-20 bg-gray-100 ">
      <div className=" max-w-7xl mx-auto px-6 ">
        <h1 className=" text-5xl font-bold ">Find Your Perfect Rental Home</h1>
        <p className=" mt-4 text-gray-600 ">Discover Verified properties and connect directly with owners.</p>

          <div className=" mt-8 flex gap-4"> 
    <button className=" bg-black text-white px-6 py-3 rounded-lg ">Browser Properties</button>
<button className=" border px-6 py-3 rounded-lg ">List Property</button>
          </div>

      </div>
    </section>
  );
};

export default HeroSection;
