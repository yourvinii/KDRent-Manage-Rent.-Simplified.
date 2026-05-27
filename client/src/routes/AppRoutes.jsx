import React from "react";
import { Route, Routes } from "react-router-dom";

/*Layout*/
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Pages
import Home from "../pages/home/Home";
import Explore from "../pages/home/Explore";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import NotFound from "../pages/errors/NotFound";
 
const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTES  */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="explore" element={<Explore />} />

        <Route path="login" element={<Login />} />

        <Route path="register" element={<Register />} />
      </Route>

      {/* DASHBOARD ROUTES  */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<h1 className="text-4xl">Dashboard Home</h1>} />
      </Route>
      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
