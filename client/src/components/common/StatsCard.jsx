import React from "react";

const StatsCard = ({ number, label }) => {
  return (
    <div className=" bg-white shadow-2xl py-8 rounded-lg text-center  ">
      <div className=" text-3xl font-bold text-blue-700 ">{number}</div>
      <p className="text-2xl font-semibold ">{label}</p>
    </div>
  );
};

export default StatsCard;
