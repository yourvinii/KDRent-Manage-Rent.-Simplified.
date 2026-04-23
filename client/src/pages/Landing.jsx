import Navbar from "../components/Navabar";

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to MyApp</h1>
        <p className="mt-4 text-gray-600">Login or Signup to continue</p>
      </div>
    </>
  );
};

export default Landing;