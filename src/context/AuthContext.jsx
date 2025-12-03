import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();
const AUTH_KEY = 'almadegranja_user';

const ADMIN_USER = {
  email: 'admin@almadegranja.cl',
  password: 'Admin123',
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem(AUTH_KEY);
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(AUTH_KEY);
    }
  }, [user]);

  const login = (email, password) => {
    if (email === ADMIN_USER.email && password === ADMIN_USER.password) {
      setUser({ email, role: 'admin' });
      return { success: true };
    }
    return { success: false, message: 'Credenciales inválidas' };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
