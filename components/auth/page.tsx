'use client';

import React, { useState, FC } from 'react';
import { useAppContext } from '@/context';
import LoginModal from '@/components/shared/auth/login';
import RegisterModal from '@/components/shared/auth/register';

const Authentication: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const {
    setLoginModal,
    setRegisterModal,
    loginModalVisible,
    registerModalVisible,
  } = useAppContext()
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);


  return (
    <>
      <LoginModal
        setLoginModal={setLoginModal}
        loginModalVisible={loginModalVisible}
        handleFOrgetPassword={handleShow}

      />
      <RegisterModal  
        setLoginModal={setLoginModal}
        loginModalVisible={loginModalVisible}
        registerModalVisible={registerModalVisible}
        setRegisterModal={setRegisterModal}
      />

    </>
  );
};

export default Authentication;