const ListingsSidebar = () => {
  return (
    <div
      className="
      border
      rounded-xl
      p-5
      bg-white
    "
    >
      <h3
        className="
        text-xl
        font-bold
        mb-4
      "
      >
        Filters
      </h3>

      <input
        type="text"
        placeholder="Location"
        className="
        border
        p-3
        rounded-lg
        w-full
        mb-4
      "
      />

      <select
        className="
        border
        p-3
        rounded-lg
        w-full
        mb-4
      "
      >
        <option>
          Property Type
        </option>

        <option>
          Apartment
        </option>

        <option>
          House
        </option>

        <option>
          Villa
        </option>
      </select>

      <input
        type="number"
        placeholder="Budget"
        className="
        border
        p-3
        rounded-lg
        w-full
      "
      />
    </div>
  );
};

export default ListingsSidebar;