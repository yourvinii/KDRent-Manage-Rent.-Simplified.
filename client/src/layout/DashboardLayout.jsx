import { Outlet } from "react-router-dom";
import DashboardNav from '../components/DashboardNav.jsx'
import Dashboard from "../page/dashboard/Dashboard.jsx";
export default function DashboardLayout() {
  return (
  <>
  <Dashboard/>
  <Outlet />
  </>
  );
}
