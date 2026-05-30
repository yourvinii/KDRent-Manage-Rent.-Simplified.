const DashboardStats = () => {
  return (
    <div
      className="
      grid
      md:grid-cols-3
      gap-6
    "
    >
      <div
        className="
        border
        rounded-xl
        p-6
      "
      >
        <h3>Total Properties</h3>

        <p
          className="
          text-3xl
          font-bold
        "
        >
          12
        </p>
      </div>

      <div
        className="
        border
        rounded-xl
        p-6
      "
      >
        <h3>Active Listings</h3>

        <p
          className="
          text-3xl
          font-bold
        "
        >
          8
        </p>
      </div>

      <div
        className="
        border
        rounded-xl
        p-6
      "
      >
        <h3>Messages</h3>

        <p
          className="
          text-3xl
          font-bold
        "
        >
          25
        </p>
      </div>
    </div>
  );
};

export default DashboardStats;