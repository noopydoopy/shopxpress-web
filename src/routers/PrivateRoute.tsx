import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react";
import ProtectedLayout from "../layouts/ProtectedLayout";
import { PublicRoutes } from "../constants/ApplicationRoutes";

const PrivateRoute = () => {
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        console.log('PrivateRoute isAuthenticated', isAuthenticated)
    }, [isAuthenticated])

    return isAuthenticated ? <ProtectedLayout /> : <Navigate to={PublicRoutes.LOGIN} />;
}

export default PrivateRoute;