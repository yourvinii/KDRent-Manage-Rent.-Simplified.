import React from "react";
import Button from "./Button";

const PropertyCard = ({ image, title, price, location, type }) => {
  return (
    <div className=" bg-white shadow-2xl rounded-lg overflow-hidden">
      <img className=" h-56 w-full object-cover " src={image} alt={title} />
      <div className="p-4 flex flex-col gap-4">
        <h3 className="font-semibold  ">{title}</h3>
        <p className="text-sm text-gray-600">{location}</p>
        <p className=" text-sm font-medium ">&#8377;{price}/Night</p>
        <p className="text-sm text-gray-700">{type}</p>
        <Button text={"View Details"} />
      </div>
    </div>
  );
};

export default PropertyCard;
