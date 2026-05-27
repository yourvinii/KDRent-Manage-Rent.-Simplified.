import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className=" min-h-screen flex flex-col ">
      <Navbar />

      <main className=" flex-1 p-4 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
