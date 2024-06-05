'use client';
import Image from 'next/image';
import { Drawer, Button, Checkbox, Form, Input, Flex, message, notification } from 'antd';
import React, { FC, useState } from 'react';
import StepOne from './stepOne';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAppContext } from '@/context';
import { useAuthContext } from '@/context/auth';
import styles from '../style.module.scss';
import { useSignin } from '@/hooks/auth/index.';
import { setCookies } from '@/utils/setCookies';
import {useRouter } from 'next/navigation';
import Loading from '@/components/loadings';

interface loginModalProps {
  loginModalVisible: boolean;
	setLoginModal: (val: boolean) => void;
	handleFOrgetPassword: () => void;
}

const LoginModal: FC<loginModalProps> = ({
	setLoginModal,
	loginModalVisible,
	handleFOrgetPassword,
}) => {
  const { setRegisterModal } = useAppContext()
	const [stepOne, setStepOne] = useState(false);
  const [userResponse, setUserResponse] = useState({})
	const { setUser, setIsAuthenticated, setRole } = useAuthContext();
	const router = useRouter();
	const { mutate, isPending: isLogining } = useSignin();
	const [api, contextHolder] = notification.useNotification();
	

	const onFinish = (values: any) => {
		mutate(values,{
			onSuccess: async (response) => {
				// if (!response) return message.error('Something went wrong');
				const { data, status,  headers} = response;
				if (status === 200) {
					setIsAuthenticated(true)
					setCookies(headers, data.data);
					setUserResponse(data.data)
					localStorage.getItem('role') && setRole(JSON.parse(localStorage.getItem('role')))
					message.success('Login successfully');
					setLoginModal(false);
					setUser(data.data);
					setStepOne(true);
					router.push('/');
				}
			},
			onError: (error) => {
				error.data.errors.map((err) => {
					message.error(err);
				});
			},
		});
	};

	return (
		<Drawer
			title={<span className='text-center'>Log In</span>}
			width={520}
			closable={false}
			onClose={() => setLoginModal(false)}
			open={loginModalVisible}
      className='flex justify-center items-center bg-primary2 h-full'

		>
      <Flex align='center' className='w-full h-full' vertical gap={50}>
        <div className='flex justify-center items-center w-[200px] h-[200px] bg-primary2 rounded-md shadow-md'>
          <h1 className='text-xl text-white'>Logo</h1>
        </div>

			<Form
				name='login'
				className={styles.loginForm}
				initialValues={{ remember: true }}
				onFinish={onFinish}
			>
				<Form.Item
					name='email'
					rules={[
						{ required: true, message: 'Please input your Username or Email!' },
					]}
				>
					<Input
						prefix={<UserOutlined className='site-form-item-icon' />}
						placeholder='Username or Email'
						className='my-3'
					/>
				</Form.Item>
				<Form.Item
					name='password'
					rules={[{ required: true, message: 'Please input your Password!' }]}
				>
					<Input
						prefix={<LockOutlined className='site-form-item-icon' />}
						type='password'
						placeholder='Password'
						className='flex items-center mb-3'

					/>
				</Form.Item>
					<Form.Item name='remember' valuePropName='checked' noStyle className='flex mb-3 flex-col'>
						<Checkbox>Remember me</Checkbox>

				</Form.Item>
				<Form.Item>
					<button
							className='text-md mb-1 text-primary2 hover:text-primary2-400'
            
					onClick={handleFOrgetPassword}
					>
						Forgot password ?
					</button>
					</Form.Item>

				<Form.Item>
					<button
						type='submit'
						className='flex w-full justify-center rounded-md bg-primary2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary2-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
					>
						Sign in
					</button>
					<p className='mt-6 text-center text-sm text-gray-500'>
						Don&apos;t have an account?{' '}
						<button
							className='font-semibold leading-6 text-primary2 hover:text-primary2-400'
              onClick={() => {
                setLoginModal(false)
                setRegisterModal(true)
              }}
						>
							Register here.
						</button>
					</p>
				</Form.Item>
			</Form>
      </Flex>
			{isLogining && <Loading /> }
			{ userResponse && <StepOne 
			setLoginModal={setLoginModal}
			loginModalVisible={loginModalVisible}
			setRegisterModal={setRegisterModal}
      user={userResponse}
		  open={stepOne}
			setOpen={setStepOne}
		/>}
		</Drawer>
	);
};

export default LoginModal;
