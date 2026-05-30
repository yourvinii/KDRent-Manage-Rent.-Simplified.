import PropertyCard from "../cards/PropertyCard";

import dummyProperties from "../../utils/dummyProperties";

const ListingsGrid = () => {
  return (
    <div
      className="
      grid
      md:grid-cols-2
      lg:grid-cols-3
      gap-6
    "
    >
      {dummyProperties.map(
        (property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        )
      )}
    </div>
  );
};

export default ListingsGrid;