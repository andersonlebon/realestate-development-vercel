import {
	Drawer,
	Button,
	Card,
	Space,
	Form,
	Radio,
	Flex,
	Col,
	Row,
	message,
} from 'antd';
import React, { FC, useState } from 'react';
import StepTwo from './role/investor';
import { useGetUserRoles } from '@/hooks/auth/index.';
import Agent from './role/agent';
import Agency from './role/agency';
import Client from './role/client';
import Investor from './role/investor';
import { useRouter } from 'next/navigation'
import { useAuthContext } from '@/context/auth';

interface StepOneProps {
	setLoginModal: (val: boolean) => void;
	setRegisterModal: (val: boolean) => void;
	loginModalVisible: boolean;
	setOpen: (value: boolean) => void;
	open: boolean;
	user: any;
}

const StepOne: FC<StepOneProps> = ({
	setLoginModal,
	setRegisterModal,
	open,
	setOpen,
	user
}) => {
	const [stepTwo, setStepTwo] = useState(false);
	const { setRole } = useAuthContext();
	const [selectedRole, setSelectedRole] = useState({});
	const { data: userRoles } = useGetUserRoles(user.id);
	const router = useRouter()
	const handleSelect = (role) => {
		setSelectedRole(role)
	};

	const handleSubmit = () => {
		localStorage.setItem('currentRole', JSON.stringify(selectedRole))
    setRole(selectedRole)
    setRegisterModal(false)
		setLoginModal(false)
		setOpen(false)
	}

	return (
		<Drawer
			title='Login As'
			width={600}
			closable={false}
			onClose={() => setOpen(!open)}
			open={open}
		>
			<p>Choose your role</p>
			<Flex
				vertical
				justify='center'
				align='center'
				wrap='wrap'
				className='flex w-full flex-col justify-center items-center my-5'
			>
				<Flex
					vertical={false}
					justify='center'
					align='center'
					wrap='wrap'
					className='flex w-full justify-center items-center gap-3 my-5'
				>
					{userRoles?.map((role, index) => (
						<div className="ltn__category-item ltn__category-item-5 bg-[#fdfbeb] ltn__category-item-5-2 min-w-[300px]"  key={index}>
						<div onClick={() =>{ 
							handleSelect(role.name)
							handleSubmit()
							}}>
							<span className="category-icon">
								<i className='flaticon-book'></i>
							</span>
							<span className="category-number">{index+1}</span>
							<span className="category-title">{role.name}</span>
						</div>
					</div>
					))}
				</Flex>
			</Flex>
		</Drawer>
	);
};

export default StepOne;
