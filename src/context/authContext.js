import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const updateAuth = (newData) => {
    if (newData) {
      console.log(newData);
      setAuth(newData);
      sessionStorage.setItem("admin", JSON.stringify(true));
      localStorage.setItem(
        "auth",
        JSON.stringify({
          success: newData.success,
          message: newData.message,
          userId: newData.userId,
        })
      );
    } else {
      setAuth({});
      localStorage.removeItem("auth");
      sessionStorage.removeItem("admin");
    }
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
