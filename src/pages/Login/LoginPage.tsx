import { useCallback, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const LoginPage = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  const handleLogin = useCallback(() => {
    login();
    navigate('/');
  }, [login]);

  return (
    <>
      <h1>Login Page</h1>
      <Button variant='primary' onClick={handleLogin}>
        Login
      </Button>
    </>
  );
};

export default LoginPage;
