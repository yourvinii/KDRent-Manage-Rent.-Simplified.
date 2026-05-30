import SectionHeading from "../../components/common/SectionHeading";

import ListingsSidebar from "../../components/listings/ListingsSidebar";

import ListingsGrid from "../../components/listings/ListingsGrid";

const Listings = () => {
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
        <SectionHeading
          title="Browse Properties"
          subtitle="Find rental properties that match your needs."
        />

        <div
          className="
          grid
          lg:grid-cols-4
          gap-8
        "
        >
          <div>
            <ListingsSidebar />
          </div>

          <div
            className="
            lg:col-span-3
          "
          >
            <ListingsGrid />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Listings;