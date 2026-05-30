import React from "react";

const StatsSection = () => {
  return (
    <section className=" py-20 bg-gray-100 ">
      <div className=" max-w-7xl mx-auto px-6 ">
        <div className=" grid md:grid-cols-4 gap-6 text-center ">
          <div>
            <h3 className=" text-4xl font-bold ">500+</h3>
          <p>Properties</p>
          </div>
          <div>
            <h3 className=" text-4xl font-bold ">100+</h3>
          <p>Owners</p>
          </div>
          <div>
            <h3 className=" text-4xl font-bold ">2000+</h3>
          <p>Users</p>
          </div>
          <div>
            <h3 className=" text-4xl font-bold ">Support</h3>
          <p>24/7</p>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
