import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layout/MainLayout.jsx";
import Landing from "./pages/Landing/Landing.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

import DashboardLayout from "./layout/DashboardLayout.jsx";
import AddProperty from "./pages/Dashboard/AddProperty.jsx";
import MyProperties from "./pages/Dashboard/MyProperties.jsx";

import PrivateRoute from "./routes/PrivateRoutes.jsx";

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
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "add-property", element: <AddProperty /> },
      { path: "my-properties", element: <MyProperties /> },
    ],
  },
]);

export default router;
