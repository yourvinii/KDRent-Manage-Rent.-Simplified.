import { Outlet } from "react-router-dom";
import DashboardNav from '../components/DashboardNav.jsx'
export default function DashboardLayout() {
  return (
  <>
  <DashboardNav/>
  <Outlet />
  </>
  );
}
