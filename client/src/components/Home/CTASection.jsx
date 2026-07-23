import React from "react";

import Button from "../common/Button";
const CTASection = () => {
  return (
    <section className="max-w-7xl  mx-auto px-6 py-20 ">
     <div className="text-center bg-black text-white rounded-lg p-20 ">
       <h3 className="font-bold text-5xl mb-4">Ready To Find Your Next Home?</h3>
      <p className="text-xl italic  mb-2">Explore verified properties and connect directly with owners.</p>
      <Button className="outline" text={"Browse Properties"} />
     </div>
    </section>
  );
};

export default CTASection;
