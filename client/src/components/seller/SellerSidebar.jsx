import { Link } from "react-router-dom";

const SellerSidebar = () => {
  return (
    <aside
      className="
      bg-black
      text-white
      p-6
    "
    >
      <h2
        className="
        text-2xl
        font-bold
        mb-8
      "
      >
        Seller Panel
      </h2>

      <div className="space-y-4">

        <Link
          className="block"
          to="/seller"
        >
          Dashboard
        </Link>

        <Link
          className="block"
          to="/seller/add-property"
        >
          Add Property
        </Link>

        <Link
          className="block"
          to="/seller/my-properties"
        >
          My Properties
        </Link>

      </div>
    </aside>
  );
};

export default SellerSidebar;