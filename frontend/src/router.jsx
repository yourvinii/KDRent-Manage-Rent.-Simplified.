import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import LandingPage from "./pages/shared/LandingPage";
import PropertiesPage from "./pages/public/PropertiesPage";
import PropertyDetailsPage from "./pages/public/PropertyDetailsPage";
import ContactPage from "./pages/public/ContactPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import VerifyEmailPage from "./pages/auth/VerifyEmailPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import WishlistPage from "./pages/buyer/WishlistPage";
import SellerDashboardPage from "./pages/seller/SellerDashboardPage";
import MyPropertiesPage from "./pages/seller/MyPropertiesPage";
import AddPropertyPage from "./pages/seller/AddPropertyPage";
import SellerInquiriesPage from "./pages/seller/SellerInquiriesPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import ManageUsersPage from "./pages/admin/ManageUsersPage";
import ManagePropertiesPage from "./pages/admin/ManagePropertiesPage";
import PendingSellersPage from "./pages/admin/PendingSellersPage";
import ProfilePage from "./pages/shared/ProfilePage";
import ChatsPage from "./pages/shared/ChatsPage";
import NotFoundPage from "./pages/shared/NotFoundPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import RoleRoute from "./routes/RoleRoute";

// Route groups will receive authentication guards in the next backend-integration phase.
const router = createBrowserRouter([{ path: "/", element: <PublicLayout />, children: [
  { index: true, element: <LandingPage /> }, { path: "properties", element: <PropertiesPage /> }, { path: "properties/:id", element: <PropertyDetailsPage /> }, { path: "contact", element: <ContactPage /> }, { path: "login", element: <LoginPage /> }, { path: "register", element: <RegisterPage /> }, { path: "verify-email", element: <VerifyEmailPage /> }, { path: "forgot-password", element: <ForgotPasswordPage /> }, { path: "profile", element: <ProtectedRoute><ProfilePage /></ProtectedRoute> }, { path: "chats", element: <ProtectedRoute><ChatsPage /></ProtectedRoute> }, { path: "wishlist", element: <RoleRoute roles={["buyer"]}><WishlistPage /></RoleRoute> }, { path: "seller/dashboard", element: <RoleRoute roles={["seller"]}><SellerDashboardPage /></RoleRoute> }, { path: "seller/properties", element: <RoleRoute roles={["seller"]}><MyPropertiesPage /></RoleRoute> }, { path: "seller/add-property", element: <RoleRoute roles={["seller"]}><AddPropertyPage /></RoleRoute> }, { path: "seller/inquiries", element: <RoleRoute roles={["seller"]}><SellerInquiriesPage /></RoleRoute> }, { path: "admin/dashboard", element: <RoleRoute roles={["admin"]}><AdminDashboardPage /></RoleRoute> }, { path: "admin/users", element: <RoleRoute roles={["admin"]}><ManageUsersPage /></RoleRoute> }, { path: "admin/properties", element: <RoleRoute roles={["admin"]}><ManagePropertiesPage /></RoleRoute> }, { path: "admin/sellers", element: <RoleRoute roles={["admin"]}><PendingSellersPage /></RoleRoute> }, { path: "*", element: <NotFoundPage /> },
] }]);

export default router;
