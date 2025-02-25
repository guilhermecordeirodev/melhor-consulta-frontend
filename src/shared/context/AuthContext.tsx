import { createContext, useContext, useState } from 'react';
import { User } from '../../dtos/user';
import api from '../services/api/api';

interface IAuthContext {
  user: User; 
  login: (token: string) => Promise<User>; 
  logout: () => void; 
  isAuthenticated: boolean;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {

  const [user, setUser] = useState<User>({} as User);


  async function login(token: string): Promise<User> {
    const response = await api.post('/auth/google', { idToken: token });
    api.defaults.headers.common.Authorization = response.data.accessToken;
    console.log(response)
    setUser(response.data);
    return response.data;
  }


  function logout() {
    setUser({} as User);
  }

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user.accessToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
