import  { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [authDetails, setAuthDetails] = useState({
        isLoggedIn: false,
        token: null,
        name: null,
    });

    const login = (token, name) => {
        setAuthDetails({
            isLoggedIn: true,
            token: token,
            name: name,
        });
    };

    const logout = () => {
        setAuthDetails({
            isLoggedIn: false,
            token: null,
            name: null,
        });
    };

    return (
        <AuthContext.Provider value={{ authDetails, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
