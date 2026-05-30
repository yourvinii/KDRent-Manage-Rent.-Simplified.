const PropertyForm = () => {
  return (
    <form className="space-y-4">

      <input
        type="text"
        placeholder="Property Title"
        className="
        border
        p-3
        rounded-lg
        w-full
        "
      />

      <input
        type="text"
        placeholder="Location"
        className="
        border
        p-3
        rounded-lg
        w-full
        "
      />

      <input
        type="number"
        placeholder="Price"
        className="
        border
        p-3
        rounded-lg
        w-full
        "
      />

      <textarea
        placeholder="Description"
        className="
        border
        p-3
        rounded-lg
        w-full
        "
      />

      <button
        className="
        bg-black
        text-white
        px-6
        py-3
        rounded-lg
        "
      >
        Save Property
      </button>

    </form>
  );
};

export default PropertyForm;