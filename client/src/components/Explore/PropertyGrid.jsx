import PropertyCard from "../common/PropertyCard";



const PropertyGrid = ({properties}) => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            image={property.image}
            title={property.title}
            location={property.location}
            price={property.price}
            type={property.type}
          />
        ))}
      </div>
    </section>
  );
};

export default PropertyGrid;