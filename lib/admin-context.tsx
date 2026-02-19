'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { validateAdminCredentials } from './admin-auth';

interface AdminContextType {
  isLoggedIn: boolean;
  adminEmail: string | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminEmail, setAdminEmail] = useState<string | null>(null);

  // Load admin session from localStorage on mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('admin-email');
    const savedSession = localStorage.getItem('admin-session');
    if (savedEmail && savedSession === 'true') {
      setAdminEmail(savedEmail);
      setIsLoggedIn(true);
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    if (validateAdminCredentials(email, password)) {
      setAdminEmail(email);
      setIsLoggedIn(true);
      localStorage.setItem('admin-email', email);
      localStorage.setItem('admin-session', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setAdminEmail(null);
    setIsLoggedIn(false);
    localStorage.removeItem('admin-email');
    localStorage.removeItem('admin-session');
  };

  return (
    <AdminContext.Provider value={{ isLoggedIn, adminEmail, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
