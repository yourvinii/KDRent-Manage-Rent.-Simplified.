import Activity from "../components/Activity";
import Header from "../components/Header";
import RevenueChart from "../components/RevenueChart";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Header />

        <div className="grid">
          <StatCard title="Revenue" value="$5496" />
          <StatCard title="Expenses" value="$3500" />
          <StatCard title="Tenants" value="1500" />
          <StatCard title="Maintenance" value="12547" />
        </div>

        <div style={{ marginTop: 20, display: "flex", gap: 20 }}>
          <RevenueChart />
          <Activity />
        </div>
      </div>
    </div>
  );
}
