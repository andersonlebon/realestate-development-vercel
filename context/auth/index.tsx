'use client';

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';
import { useSessionStorage } from 'usehooks-ts';

import Cookies from 'js-cookie';
import { clearAllCookies, COOKIES_KEY } from '@/utils/setCookies';
// import { useGetUniversityStaffProfile } from '@/hooks/university';
import { TUser } from '@/@types/shared/type';

// import { TUniversityStaffProfile } from '@/@types/university/dtos';

type authTokenProps = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};

type TCreateContext = {
  user: TUser | null;
  authTokens: authTokenProps;
  setAuthTokens: () => void;
  setUser: (data: TUser) => void;
  role: any;
  setRole: any
  isAuthenticated: boolean;
  setIsAuthenticated: (data: boolean) => void;
  logOut: () => void;
};


const AuthContext = createContext<TCreateContext | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      'useAuthContext must be used within AuthProvider'
    );
  }
  return context;
};

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [authTokens, setAuthTokens] = useState<authTokenProps | null>();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<TUser | null>(null);
  const [role, setRole] = useState<TUser | null>(null);
  const router = useRouter();

  const logOut = () => {
    setAuthTokens(null);
    setUser(null);
    setIsAuthenticated(false);
    setRole(null)
    localStorage.clear()
    clearAllCookies();

    router.push('/');
  };

  const contextData = {
    user,
    role,
    setRole,
    authTokens,
    setAuthTokens,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
    logOut,
  };


  useEffect(() => {
    const accessToken = Cookies.get(COOKIES_KEY.ACCESS_TOKEN);
    const expiresIn = Cookies.get(COOKIES_KEY.EXPIRY);
    const refreshToken = Cookies.get(COOKIES_KEY.AUTHORIZATION);

    if (accessToken && expiresIn && refreshToken) {
      setAuthTokens({
        accessToken,
        expiresIn: Number(expiresIn),
        refreshToken,
      });
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
}
