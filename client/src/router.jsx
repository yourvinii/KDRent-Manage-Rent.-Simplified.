import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/HomePage/Home";
import Login from "./pages/authPage/Login";
import Register from "./pages/authPage/Register";
import Explore from "./pages/HomePage/Explore";
import ProtectedRoute from "./routes/ProtectedRoute";

// Public
import Listing from "./pages/Public/Listing/Listing";
import PropertyDetails from "./pages/Public/PropertyDetails/PropertyDetails";
import About from "./pages/Public/About/About";
import Contact from "./pages/Public/Contact/Contact";

// Buyer
import Wishlist from "./pages/Buyer/Wishlist/Wishlist";
import Profile from "./pages/Buyer/Profile/Profile";
import MyInquiries from "./pages/Buyer/MyInquires/MyInquiries";

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
    ],
  },
]);

export default router;
