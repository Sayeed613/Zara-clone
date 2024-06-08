import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import { useContext } from "react";

export default function PrivateRoutes({ children }) {
    const { authDetails } = useContext(AuthContext);

    if (!authDetails.isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return children;
}
