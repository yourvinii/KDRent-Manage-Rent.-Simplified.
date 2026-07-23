import React from "react";

const TestimonialCard = ({name, review}) => {
  return <div className="bg-white shadow-2xl relative rounded-lg px-4 py-12">
    <p className="italic text-gray-700 mb-2">{review}</p>
    <p>⭐⭐⭐⭐⭐</p>
    <h3 className="font-semibold absolute right-6 bottom-2 ">- {name}</h3>
  </div>;
};

export default TestimonialCard;
