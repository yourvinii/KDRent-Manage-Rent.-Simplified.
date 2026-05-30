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
import ProtectedRoutes from "./ProtectedRoutes";
import Listings from "../pages/listings/Listings";
import PropertyDetails from "../pages/property/PropertyDetails";

import SellerLayout from "../layouts/SellerLayout";
import SellerDashboard from "../pages/seller/SellerDashboard";
import AddProperty from "../pages/seller/AddProperty";
import MyProperties from "../pages/seller/MyProperties";

const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTES  */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="listings" element={<Listings />} />
        <Route path="/property/:id" element={<PropertyDetails />} />{" "}
      </Route>

       {/* Seller Routes */}

      <Route
        path="/seller"
        element={
          <ProtectedRoute>
            <SellerLayout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={<SellerDashboard />}
        />

        <Route
          path="add-property"
          element={<AddProperty />}
        />

        <Route
          path="my-properties"
          element={<MyProperties />}
        />
      </Route>


      {/* DASHBOARD ROUTES  */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes>
            <DashboardLayout />
          </ProtectedRoutes>
        }
      >
        <Route index element={<h1 className="text-4xl">Dashboard Home</h1>} />
      </Route>
      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
