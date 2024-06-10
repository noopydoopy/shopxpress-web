// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const didRequest = useRef(false);

  const login = () => {
    console.log('Login is called');
    setIsAuthenticated(true);
  };
  const logout = () => {
    console.log('Logout is called');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    console.log('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    console.log('');
    const validateUser = async () => {
      try {
        if (!didRequest.current) {
          // Verify that user has been login.
          console.log('Will get and retrieve user data.');
        }
      } catch (error) {
        console.error(error);
        if (!didRequest.current) {
          logout();
        }
        console.log('Display error page');
      }
      return () => (didRequest.current = true);
    };
    validateUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
