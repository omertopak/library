// Auth Context


import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [user, setUser] = useState(false)
  const values = {user, setUser}  

  return (
    <LoginContext.Provider value={values}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => {
    return useContext(LoginContext)
}

export default LoginContextProvider;