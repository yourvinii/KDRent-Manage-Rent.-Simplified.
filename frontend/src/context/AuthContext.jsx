import { createContext, useState } from "react";
import {
  loginUser as loginService,
  registerUser as registerService,
  logoutUser as logoutService,
} from "../services/authService";

// import Cookies from "js-cookie";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = async (data) => {
    try {
      const response = await loginService(data);

      //store token in cookie
      // Cookies.set("Token", response.token);

      // setToken(response.token);
      setUser(response.user);

      return response;
    } catch (error) {
      throw error;
    }
  };

  // const logoutUser = () => {
  //   // Cookies.remove("token");
  //   setToken(null);
  //   setUser(null);
  // };

  const registerUser = async (data) => {
    // this
    try {
      const response = await registerService(data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const logoutUser = async () => {
    await logoutService(); // clears cookie in backend
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginUser,
        registerUser, //added this

      }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
