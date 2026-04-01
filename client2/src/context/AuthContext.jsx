import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser, logoutUser } from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // store login user
  const login = (userData) => {
    setUser(userData);
  };

  //logout
  const logout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.log("Logout user:", error);
    } finally {
      setUser(null);
    }
  };

  // auto login check cookie => /me

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const data = await getCurrentUser();
        setUser(data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

//Custom hook
export const useAuth = () => useAuth(AuthContext);
