import { createContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const user = {
    id: 1,
    name: "Vinayak",
  };
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
