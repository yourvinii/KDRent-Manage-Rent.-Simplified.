const TOKEN_KEY = "kdrent_token";
const USER_KEY = "kdrent_user";

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getStoredUser = () => JSON.parse(localStorage.getItem(USER_KEY) || "null");
export const saveSession = ({ token, user }) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};
export const clearSession = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};
