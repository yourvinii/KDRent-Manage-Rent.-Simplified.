import { Outlet } from "react-router-dom";
import DashboardNav from "../components/DashboardNav.jsx";

import { useContext } from "react";
import { AuthContext } from "../context/authContext.jsx";

export default function DashboardLayout() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <h1>Owner Dashboard</h1>
      <p>{user.name} is logged in</p>
      <DashboardNav />
      <Outlet />
    </>
  );
}
