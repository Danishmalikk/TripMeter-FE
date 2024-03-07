// AuthContext.js
import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if token exists in local storage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
 
  const login = () => {
    // Set token in local storage upon login
    localStorage.setItem('token', "Tripmeter");
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Remove token from local storage upon logout
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout  }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
