import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/HomePage/Home";
import Login from "./pages/authPage/Login";
import Register from "./pages/authPage/Register";
import Explore from "./pages/HomePage/Explore";
import ProtectedRoute from "./routes/ProtectedRoute";

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
    ],
  },
]);

export default router;
