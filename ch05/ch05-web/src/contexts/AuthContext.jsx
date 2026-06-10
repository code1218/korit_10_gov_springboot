import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('mock_auth') === 'true'
  );
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem('mock_user') || 'null')
  );

  // 실제 OAuth2 API 연결 시 이 함수를 교체하세요
  const login = (provider) => {
    const mockUser = {
      name: '사용자',
      email: 'user@example.com',
      provider,
    };
    setIsAuthenticated(true);
    setUser(mockUser);
    localStorage.setItem('mock_auth', 'true');
    localStorage.setItem('mock_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('mock_auth');
    localStorage.removeItem('mock_user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
