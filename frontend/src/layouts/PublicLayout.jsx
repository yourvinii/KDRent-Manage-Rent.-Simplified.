import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const PublicLayout = () => {
  // One shell prevents navbar/footer markup from being copied into every page.
  return <div className="flex min-h-screen flex-col"><Navbar /><main className="flex-1"><Outlet /></main><Footer /></div>;
};

export default PublicLayout;
