'use client';

import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import Cookies from 'js-cookie';
import { clearAllCookies, COOKIES_KEY } from '@/utils/setCookies';
import { axiosInstancePublic, BASE_URL } from '../services/base.service';
import { message } from 'antd';
import { useAuthContext } from './auth';
import { useValidateToken } from '../hooks/auth/index.';
import { CircleLoader } from "react-spinners";
import { useAppContext } from '.';
import Loading from '../components/loadings';
import { ErrorPage } from '@/components/shared/pages/error';
import { useGetHomeInfo } from '@/hooks/home';

interface AppStateContextType {

  loginModalVisible: boolean;
  registerModalVisible: boolean;
  setLoginModal: (loginVisible: boolean) => void;
  setRegisterModal: (registerVisible: boolean) => void;
}

export const AppLayoutContext = createContext({} as AppStateContextType);

export const useAppLayoutContext = () => useContext(AppLayoutContext);

interface Props {
  children: ReactNode;
  
}

export const AppLayouteContextProvider: FC<Props> = ({ children }) => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const { setUser, setRole} = useAuthContext();
  const {
    setLoginModal,
  } = useAppContext()
  const { data: userData, isPending, error } = useValidateToken()

  useEffect(() => {
    if (userData) setUser(userData.data)
  }, [userData])

  useEffect(() => {
    const access_token = Cookies.get(COOKIES_KEY.ACCESS_TOKEN);
    const uid = Cookies.get(COOKIES_KEY.UID);
    const client = Cookies.get(COOKIES_KEY.CLIENT);
      if(error && access_token && uid && client) {
        if (error.code === "ERR_CONNECTION_REFUSED") {
          message.error(error.message)
        } else {
      error?.response.data?.errors?.map(err => message.error(err))
      setLoginModal(true)
      }
    }
    const currentRole = JSON.parse(localStorage.getItem('currentRole'))
    if (currentRole) setRole(currentRole)
  },[error])

  // render errorwhen API failed to connect
  if(error?.code === "ERR_NETWORK") return <ErrorPage />
      return (
          <AppLayoutContext.Provider
            value={{
              setLoginModal: setLoginModalVisible,
              setRegisterModal: setRegisterModalVisible,
              loginModalVisible,
              registerModalVisible,
            }}
          >
            {children}
          </AppLayoutContext.Provider>
  );
};
