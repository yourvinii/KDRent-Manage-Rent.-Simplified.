const MyPropertyCard = () => {
  return (
    <div
      className="
      border
      rounded-xl
      p-5
      "
    >
      <h3
        className="
        text-xl
        font-bold
        "
      >
        Luxury Villa
      </h3>

      <p>Bhopal</p>

      <div
        className="
        flex
        gap-3
        mt-4
        "
      >
        <button>
          Edit
        </button>

        <button>
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyPropertyCard;