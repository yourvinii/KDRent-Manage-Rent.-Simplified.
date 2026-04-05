import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Landing from "./page/landing/Landing.jsx";
import Login from "./page/login/Login.jsx";
import Register from "./page/register/Register.jsx";

import DashboardLayout from "./layout/DashboardLayout.jsx";
import Dashboard from "./page/dashboard/Dashboard.jsx";
import MyProperties from "./page/property/MyProperties.jsx";
import AddProperty from "./page/property/AddProperty.jsx";

import EditProperty from "./page/property/EditProperty.jsx";
import PropertyDetails from "./page/property/PropertyDetails.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
     
      {
        path: "/add-property",
        element: <AddProperty />,
      },
      {
        path: "/my-properties",
        element: <MyProperties />,
      },
      {
        path: "/my-properties/:id",
        element: <PropertyDetails />,
      },
      {
        path: "/my-properties/:id/edit",
        element: <EditProperty />,
      },


]);

export default router;
