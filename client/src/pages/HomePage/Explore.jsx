import { useState } from "react";
import ExploreHeader from "../../components/Explore/ExploreHeader";
import SearchBar from "../../components/Explore/SearchBar";
import PropertyGrid from "../../components/Explore/PropertyGrid";
import propertiesData from "../../data/properties";

const Explore = () => {
  const [properties, setProperties] = useState(propertiesData);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProperties = properties.filter((property) => {
    const search = searchTerm.toLowerCase();

    return (
      property.title.toLowerCase().includes(search) ||
      property.location.toLowerCase().includes(search)
    );
  });

  return (
    <>
      <ExploreHeader />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PropertyGrid properties={filteredProperties} />
    </>
  );
};

export default Explore;
