import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser, logoutUser } from "../service/authService.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // call after login
  const login = (userData) => {
    if (!userData || !userData.id) return;
    setUser(userData);
  };

   //  ADDED THIS
  const register = (userData) => {
    setUser(userData);
  };


  // logout time
  const logout = async () => {
    try {
      await logoutUser();
    } catch (err) {
      console.log("Logout error :", err);
    } finally {
      setUser(null);
    }
  };

  // auto login check
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
    <AuthContext.Provider value={{ user, login, logout, loading, register }}>
      {children}
    </AuthContext.Provider>
  );
}

// custom hook (clean Usage)

export const useAuth = () => {
  return useContext(AuthContext);
};
