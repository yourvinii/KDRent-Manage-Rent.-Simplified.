import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/HomePage/Home";
import Login from "./pages/authPage/Login";
import Register from "./pages/authPage/Register";
import Explore from "./pages/HomePage/Explore";

import ProtectedRoute from "./routes/ProtectedRoute";
import RoleProtectedRoute from "./routes/RoleProtectedRoute";

// Public
import Listing from "./pages/Public/Listing/Listing";
import PropertyDetails from "./pages/Public/PropertyDetails/PropertyDetails";
import About from "./pages/Public/About/About";
import Contact from "./pages/Public/Contact/Contact";

// Buyer
import Wishlist from "./pages/Buyer/Wishlist/Wishlist";
import Profile from "./pages/Buyer/Profile/Profile";
import MyInquiries from "./pages/Buyer/MyInquires/MyInquiries";

//Seller
import SellerDashboard from "./pages/Seller/Dashboard/Dashboard";
import MyProperties from "./pages/Seller/MyProperties/MyProperties";
import EditProperty from "./pages/Seller/EditProperty/EditProperty";
import Application from "./pages/Seller/Applications/Application";
import AddProperties from "./pages/Seller/AddProperties/AddProperties";

//Admin
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Approvals from "./pages/Admin/Approvals/Approvals";
import Inquiries from "./pages/Admin/Inquiries/Inquiries";
import Properties from "./pages/Admin/Properties/Properties";
import Users from "./pages/Admin/Users/Users";

//Chat
import ChatPage from "./pages/Chat/ChatPage/ChatPage";

// Payment
import Checkout from "./pages/Payment/Checkout/Checkout";
import Success from "./pages/Payment/Success/Success";
import Failed from "./pages/Payment/Failed/Failed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/test",
        element: (
          <ProtectedRoute>
            <h1 className="text-3xl font-bold p-10">
              Protected Route Working ✅
            </h1>
          </ProtectedRoute>
        ),
      },

      {
        path: "/listing",
        element: <Listing />,
      },
      {
        path: "/property/:id",
        element: <PropertyDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // Buyer
      {
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-inquiries",
        element: (
          <ProtectedRoute>
            <MyInquiries />
          </ProtectedRoute>
        ),
      },
      //seller
      {
        path: "/seller/dashboard",
        element: (
          <RoleProtectedRoute allowedRoles={["seller"]}>
            <SellerDashboard />
          </RoleProtectedRoute>
        ),
      },
      {
        path: "/seller/my-properties",
        element: (
          <RoleProtectedRoute allowedRoles={["seller"]}>
            <MyProperties />
          </RoleProtectedRoute>
        ),
      },
      {
        path: "/seller/add-property",
        element: (
          <RoleProtectedRoute allowedRoles={["seller"]}>
            <AddProperties />
          </RoleProtectedRoute>
        ),
      },
      {
        path: "/seller/edit-property/:id",
        element: (
          <RoleProtectedRoute allowedRoles={["seller"]}>
            <EditProperty />
          </RoleProtectedRoute>
        ),
      },
      {
        path: "/seller/applications",
        element: (
          <RoleProtectedRoute allowedRoles={["seller"]}>
            <Application />
          </RoleProtectedRoute>
        ),
      },
      {
        path: "/admin/dashboard",
        element: (
          <RoleProtectedRoute allowedRoles={["admin"]}>
            <Dashboard />
          </RoleProtectedRoute>
        ),
      },
      {
        path: "/admin/users",
        element: (
          <RoleProtectedRoute allowedRoles={["admin"]}>
            <Users />
          </RoleProtectedRoute>
        ),
      },
      {
        path: "/admin/properties",
        element: (
          <RoleProtectedRoute allowedRoles={["admin"]}>
            <Properties />
          </RoleProtectedRoute>
        ),
      },
      {
        path: "/admin/inquiries",
        element: (
          <RoleProtectedRoute allowedRoles={["admin"]}>
            <Inquiries />
          </RoleProtectedRoute>
        ),
      },
      {
        path: "/admin/approvals",
        element: (
          <RoleProtectedRoute allowedRoles={["admin"]}>
            <Approvals />
          </RoleProtectedRoute>
        ),
      },
    ],
  },

  // Chat
  {
    path: "/chat",
    element: (
      <ProtectedRoute>
        <ChatPage />
      </ProtectedRoute>
    ),
  },
  // Payment
  {
    path: "/checkout",
    element: (
      <ProtectedRoute>
        <Checkout />
      </ProtectedRoute>
    ),
  },
  {
    path: "/payment-success",
    element: (
      <ProtectedRoute>
        <Success />
      </ProtectedRoute>
    ),
  },
  {
    path: "/payment-failed",
    element: (
      <ProtectedRoute>
        <Failed />
      </ProtectedRoute>
    ),
  },
]);

export default router;
