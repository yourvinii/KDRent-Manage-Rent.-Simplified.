import { createContext, useEffect, useMemo, useState } from "react";
import * as authApi from "../api/auth.api";
import { clearSession, getStoredUser, getToken, saveSession } from "../utils/storage";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredUser);
  const [isLoading, setIsLoading] = useState(Boolean(getToken()));

  useEffect(() => {
    if (!getToken()) { setIsLoading(false); return; }
    authApi.getMe().then(({ data }) => setUser(data.user)).catch(clearSession).finally(() => setIsLoading(false));
  }, []);

  const value = useMemo(() => ({
    user, isLoading, isAuthenticated: Boolean(user),
    login: async (credentials) => {
      const { data } = await authApi.login(credentials);
      saveSession(data); setUser(data.user); return data.user;
    },
    logout: () => { clearSession(); setUser(null); },
    refreshUser: async () => { const { data } = await authApi.getMe(); setUser(data.user); },
  }), [user, isLoading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
