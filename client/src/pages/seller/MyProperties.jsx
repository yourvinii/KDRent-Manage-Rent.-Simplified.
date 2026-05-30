import MyPropertyCard from "../../components/seller/MyPropertyCard";

const MyProperties = () => {
  return (
    <>
      <h1
        className="
        text-4xl
        font-bold
        mb-8
      "
      >
        My Properties
      </h1>

      <div
        className="
        grid
        md:grid-cols-2
        gap-6
      "
      >
        <MyPropertyCard />
        <MyPropertyCard />
      </div>
    </>
  );
};

export default MyProperties;