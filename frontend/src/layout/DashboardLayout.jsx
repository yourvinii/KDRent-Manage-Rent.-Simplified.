import { Outlet } from "react-router-dom";
import DashboardNav from "../components/DashboardNav.jsx";
export default function DashboardLayout() {
  return (
    <>
      <h1>Owner Dashboard</h1>
      <DashboardNav/>
      <Outlet />
    </>
  );
}
