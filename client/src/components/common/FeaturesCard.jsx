import React from "react";

const FeaturesCard = ({ icon, title, description }) => {
  return (
    <div className=" 
   bg-white
     shadow-2xl 
     rounded-xl 
     p-6 
     flex 
     flex-col 
     gap-2 
     text-center ">
      <div className="text-4xl">{icon}</div>
      <p className="font-semibold text-xl">{title}</p>
      <p className=" italic text-gray-800">{description}</p>
    </div>
  );
};

export default FeaturesCard; 
