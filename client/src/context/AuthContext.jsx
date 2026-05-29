import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  //  CHECK TOKEN ON REFRESH

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setUser({
        token,
      });
    }
    setLoading(false);
  }, []);

  //LOGIN
  const login = (userData) => {
    setUser(userData);
  };

  //LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
