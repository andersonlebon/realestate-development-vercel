'use client';

import { createContext, FC, ReactNode, useContext, useState } from 'react';
import AuthContextProvider from './auth';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';


interface AppStateContextType {

  loginModalVisible: boolean;
  registerModalVisible: boolean;
  setLoginModal: (loginVisible: boolean) => void;
  setRegisterModal: (registerVisible: boolean) => void;
}

export const AppContext = createContext({} as AppStateContextType);

export const useAppContext = () => useContext(AppContext);

interface Props {
  children: ReactNode;
}

export const AppContextProvider: FC<Props> = ({ children }) => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [user, setUser] = useState(null);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { networkMode: 'offlineFirst' },
      mutations: { networkMode: 'offlineFirst' },
    },
  });


  return (
    <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <AppContext.Provider
            value={{
              setLoginModal: setLoginModalVisible,
              setRegisterModal: setRegisterModalVisible,
              loginModalVisible,
              registerModalVisible,
            }}
          >
            {children}
          </AppContext.Provider>
        </AuthContextProvider>
    </QueryClientProvider>
  );
};
