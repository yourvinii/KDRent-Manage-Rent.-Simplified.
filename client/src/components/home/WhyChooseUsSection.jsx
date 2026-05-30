import React from "react";

const WhyChooseUsSection = () => {
  return (
    <section className=" py-20 bg-gray-100 ">
      <div className=" max-w-7xl mx-auto px-6 ">
        <h2 className=" text-4xl font-bold text-center ">Why Choose KDRent</h2>

        <div className=" grid md:grid-cols-4 gap-6 mt-10 ">
        <div className="  border p-4 rounded-xl ">Verified Listings</div>
        <div className="  border p-4 rounded-xl ">Direct Owner Contact</div>

        <div className="border p-4 rounded-xl">Real-Time-Chat</div>
        <div className="border p-4 rounded-xl">Trusted Platform</div>
      </div>
        </div>

    </section>
  );
};

export default WhyChooseUsSection;
