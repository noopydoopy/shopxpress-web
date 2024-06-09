import { useCallback, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import MainLayout from "../../layouts/MainLayout";

const LoginPage = () => {

    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [isAuthenticated])


    const handleLogin = useCallback(() => {
        login();
        navigate('/dashboard');
    }, [login])

    return (
        <MainLayout>
            <h1>Login Page</h1>
            <Button variant="primary" onClick={handleLogin}>Login</Button>
        </MainLayout>
    )
}

export default LoginPage;