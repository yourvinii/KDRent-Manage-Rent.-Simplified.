import { createBrowserRouter } from "react-router-dom";
import HomePage from "./landingPage/home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
]);

export default router;
