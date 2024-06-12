// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect, useRef } from 'react';
import authHelper from '../helpers/authHelper';
import authService from '../services/auth.service';
import httpRequest from '../httpRequest';
import axios from 'axios';

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
    authHelper.setAuth({ token: 'token', email: 'email' });
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
    console.log('Init Auth Context.')
    const validateUser = async () => {
      try {
        console.log(didRequest.current)
        if (!didRequest.current) {
          console.log('Will get and retrieve user data.');
        }
      } catch (error) {
        console.error(error);
        if (!didRequest.current) {
          logout();
        }
        console.log('Display error page');
      }
    };

    validateUser();
    return () => {
      didRequest.current = true
    }

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
