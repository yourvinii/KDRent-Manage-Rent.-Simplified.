import Button from "../common/Button";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <section className="max-w-7xl mx-auto px-5 -mt-8 relative z-10">
      <div className="bg-white shadow-lg rounded-xl p-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Location */}
          <input
            type="text"
            placeholder="Search by title or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />

          {/* Property Type */}
          <select className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black">
            <option>All Types</option>
            <option>Room</option>
            <option>Apartment</option>
            <option>House</option>
            <option>PG</option>
          </select>

          {/* Budget */}
          <input
            type="number"
            placeholder="Max Budget"
            className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />

          {/* Button */}
          <Button text="Search" />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
