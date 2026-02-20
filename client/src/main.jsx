import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
