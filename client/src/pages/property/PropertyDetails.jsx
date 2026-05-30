import PropertyGallery from "../../components/property/PropertyGallery";

import PropertyInfo from "../../components/property/PropertyInfo";

import PropertyFeatures from "../../components/property/PropertyFeatures";

import PropertyOwner from "../../components/property/PropertyOwner";

import PropertyActions from "../../components/property/PropertyActions";

const PropertyDetails = () => {
  return (
    <section
      className="
        py-16
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >
        <PropertyGallery />

        <div className="mt-10">

          <PropertyInfo />

          <PropertyActions />

        </div>

        <div
          className="
            grid
            md:grid-cols-2
            gap-8
            mt-10
          "
        >
          <PropertyFeatures />

          <PropertyOwner />
        </div>

      </div>
    </section>
  );
};

export default PropertyDetails;