import { useContext, useState, useEffect, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signOut = () => {
    sessionStorage.removeItem("user");
    setUser(null);
  };

  const value = {
    user,
    setUser,
    signOut,
  };

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("user")));
  }, []);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
