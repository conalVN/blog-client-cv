import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const updateAuth = (newData) => {
    setAuth(newData);
    localStorage.setItem(
      "auth",
      JSON.stringify({
        success: newData.success,
        message: newData.message,
        userId: newData.userId,
      })
    );
  };
  useEffect(() => {
    const authLocal = localStorage.getItem("auth");
    if (authLocal) {
      setAuth(JSON.parse(authLocal));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, updateAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
