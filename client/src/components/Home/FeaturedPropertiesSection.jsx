import React from "react";
import PropertyCard from "../common/PropertyCard";
import Button from "../common/Button";

const FeaturedPropertiesSection = () => {
//      const featuredProperties = [
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
//     title: "Luxury 3BHK Villa",
//     location: "Whitefield, Bangalore",
//     price: "₹65,000/month",
//     type: "Villa",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
//     title: "Modern 2BHK Apartment",
//     location: "Indiranagar, Bangalore",
//     price: "₹32,000/month",
//     type: "Apartment",
//   },
//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
//     title: "Independent Family Home",
//     location: "JP Nagar, Bangalore",
//     price: "₹42,000/month",
//     type: "Home",
//   },
//   {
//     id: 4,
//     image:
//       "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800",
//     title: "Comfort Stay Lodge",
//     location: "Majestic, Bangalore",
//     price: "₹1,200/night",
//     type: "Lodge",
//   },
// ];
   const featuredProperties = [
    {
      id: 1,
      image: "https://picsum.photos/seed/villa/600/400",
      title: "Luxury 3BHK Villa",
      location: "Whitefield, Bangalore",
      price: "65,000/month",
      type: "Villa",
    },
    {
      id: 2,
      image: "https://picsum.photos/seed/apartment/600/400",
      title: "Modern 2BHK Apartment",
      location: "Indiranagar, Bangalore",
      price: "32,000/month",
      type: "Apartment",
    },
    {
      id: 3,
      image: "https://picsum.photos/seed/home/600/400",
      title: "Independent Family Home",
      location: "JP Nagar, Bangalore",
      price: "42,000/month",
      type: "Home",
    },
   
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="font-semibold text-2xl mb-5">Featured Properties</h2>

      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredProperties.map((p) => (
          <PropertyCard
            title={p.title}
            image={p.image}
            location={p.location}
            price={p.price}
            type={p.type}
            />
        ))}
        
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
