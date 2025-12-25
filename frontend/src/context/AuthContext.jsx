import { createContext, useState } from "react";
import { loginUser as loginService } from "../services/authService";
import Cookies from "js-cookie";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  //Login
  // const login = async (credentials) => {
  //   await authService.login(credentials);
  //   //if API succeeds, cookie is already set
  //   setIsAuthenticated(true);
  // };

  const loginUser = async (data) => {
    try {
      const response = await loginService(data);

      //assuming backend sends: {user, token}
      Cookies.set("token", response.token);
      setToken(response.token);
      setUser(response.user);

      return response;
    } catch (error) {
      throw error;
    }
  };

  // //logout
  // const logout = async () => {
  //   await authService.logout();
  //   setIsAuthenticated(false);
  // };

  const logoutUser = () => {
    Cookies.remove("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loginUser,
        logoutUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };