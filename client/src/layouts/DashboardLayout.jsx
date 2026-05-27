import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex ">
      {/* Sidebar  */}
      <div className=" w-64 bg-black text-white p-4 ">
        <h1 className=" text-2xl font-bold ">Dashboard</h1>

        <div className=" mt-6 space-y-3 ">
          <p>Home</p>
          <p>Profile</p>
          <p>Settings</p>
        </div>
      </div>

      {/* Page Content  */}

      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
