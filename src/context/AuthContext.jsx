import { createContext, useState } from "react";
 
export const AuthContext = createContext();

export const AuthProvider =({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState('');

    const login = () => {
        setIsAuth(true);
    }
    const logout = () => {
        setIsAuth(false);
    }

    return (
        <AuthContext.Provider value={{isAuth,login,logout,token,setToken}} >{children}</AuthContext.Provider>
    );
};