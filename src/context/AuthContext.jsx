import { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      if (token) {
        const response = await authAPI.getCurrentUser();
        setUser(response.data || response.user || response);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      localStorage.removeItem('auth_token');
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      const response = await authAPI.register(userData);
      console.log('Register Response:', response);

      const data = response.data || response;
      const token = data.access_token || data.token;
      const userInfo = data.user || data.data?.user || data;

      if (response.success !== false && token) {
        // SAVE TOKEN
        localStorage.setItem('auth_token', token);

        setUser(userInfo);
        setIsAuthenticated(true);

        return { success: true, data: response };
      }

      return {
        success: false,
        error: {
          message: response.message || 'Registration failed',
          errors: response.errors || {}
        }
      };

    } catch (error) {
      console.error('Register Error:', error);
      return { success: false, error };
    }
  };


  const login = async (credentials) => {
    try {
      const response = await authAPI.login(credentials);
      console.log('Login Response:', response);

      const data = response.data || response;
      const token = data.access_token || data.token;
      const userInfo = data.user || data.data?.user || data;

      if (response.success !== false && token) {
        // CHECK EMAIL VERIFICATION
        if (userInfo.email_verified_at !== undefined && !userInfo.email_verified_at) {
          return {
            success: false,
            error: {
              message: 'Please verify your email address before logging in.'
            }
          };
        }

        // SAVE TOKEN
        localStorage.setItem('auth_token', token);

        setUser(userInfo);
        setIsAuthenticated(true);

        return { success: true, data: response };
      }

      return {
        success: false,
        error: {
          message: response.message || 'Login failed',
          errors: response.errors || {}
        }
      };

    } catch (error) {
      console.error('Login Error:', error);
      return { success: false, error };
    }
  };

  const logout = async () => {
    try {
      await authAPI.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('auth_token');
    }
  };

  const updateUserData = (userData) => {
    setUser(prevUser => ({ ...prevUser, ...userData }));
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    register,
    login,
    logout,
    updateUserData,
    checkAuthStatus
  };

  return (
    <AuthContext.Provider value={value}>
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

export default AuthContext;
