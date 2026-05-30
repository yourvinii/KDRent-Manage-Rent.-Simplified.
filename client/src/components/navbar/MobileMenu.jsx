import { Link } from "react-router-dom";

const MobileMenu = ({
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="
      md:hidden
      bg-white
      border-t
      p-4
      space-y-4
    "
    >
      <Link
        to="/"
        className="block"
      >
        Home
      </Link>

      <Link
        to="/listings"
        className="block"
      >
        Listings
      </Link>

      <Link
        to="/login"
        className="block"
      >
        Login
      </Link>
    </div>
  );
};

export default MobileMenu;