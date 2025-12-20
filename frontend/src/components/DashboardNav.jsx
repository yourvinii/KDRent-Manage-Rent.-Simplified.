import { NavLink } from "react-router-dom";

export default function DashboardNav() {
  return (
    <nav>
      <NavLink to={"/dashboard"}>Dashboard</NavLink>
      <NavLink to={"/dashboard/add-property"}>Add Property</NavLink>
      <NavLink to={"/dashboard/my-properties"}>My Property</NavLink>
    </nav>
  );
}
