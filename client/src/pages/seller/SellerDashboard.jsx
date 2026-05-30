import DashboardStats from "../../components/seller/DashboardStats";

const SellerDashboard = () => {
  return (
    <>
      <h1
        className="
        text-4xl
        font-bold
        mb-8
      "
      >
        Seller Dashboard
      </h1>

      <DashboardStats />
    </>
  );
};

export default SellerDashboard;