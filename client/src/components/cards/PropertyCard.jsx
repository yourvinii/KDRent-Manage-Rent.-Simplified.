const PropertyCard = ({
  property,
}) => {
  return (
    <div
      className="
      bg-white
      rounded-xl
      overflow-hidden
      shadow-md
      hover:shadow-lg
      transition
    "
    >
      <img
        src={property.image}
        alt={property.title}
        className="
          w-full
          h-52
          object-cover
        "
      />

      <div className="p-4">

        <h3 className="text-xl font-bold">
          {property.title}
        </h3>

        <p className="text-gray-600 mt-2">
          {property.location}
        </p>

        <p className="mt-2 font-semibold">
          {property.price}
        </p>

        <button
          className="
          mt-4
          w-full
          bg-black
          text-white
          py-2
          rounded-lg
        "
        >
          View Details
        </button>

      </div>
    </div>
  );
};

export default PropertyCard;