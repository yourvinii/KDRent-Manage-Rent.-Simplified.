import { Outlet } from "react-router-dom";

import SellerSidebar from "../components/seller/SellerSidebar";

const SellerLayout = () => {
  return (
    <div
      className="
      min-h-screen
      grid
      md:grid-cols-[250px_1fr]
    "
    >
      <SellerSidebar />

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default SellerLayout;