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
import { useSetUserRole } from '@/hooks/auth/index.';
import Agent from './role/agent';
import Agency from './role/agency';
import Client from './role/client';
import Investor from './role/investor';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

interface StepOneProps {
	setLoginModal: (val: boolean) => void;
	loginModalVisible: boolean;
	setOpen: (value: boolean) => void;
	open: boolean;
	user: any;
}

const StepOne: FC<StepOneProps> = ({
	setLoginModal,
	loginModalVisible,
	open,
	setOpen,
	user
}) => {
	const [stepTwo, setStepTwo] = useState(false);
	const [selectedRole, setSelectedRole] = useState('client');
	const { mutate } = useSetUserRole();
	const router = useRouter()
	const roles = [
		{
			name: 'Client',
			descrip: 'I am just findind a best Home to buy',
		},
		{
			name: 'Agent',
			descrip: 'I want to be an agent',
		},
		{
			name: 'Agency',
			descrip: 'I want buld an agency',
		},
		{ name: 'Investor', descrip: 'I want to Invest in Real estate' },
	];
	const handleSelect = (role) => setSelectedRole(role);

	const handleSubmit = () => {
		mutate(
			{ role: selectedRole.toLowerCase(), user },
			{
				onSuccess: () => {
					message.success(`Your ${selectedRole} is setup`) 
					message.success('Let us build your profile');
					router.push('/account')
					// setStepTwo(true)
				},
				onError: ({response}) => {
					if(!response) message.error('Something went wrong');
					response.data.map(err => message.error(err))
				},
			}
		);
	};
	return (
		<Drawer
			title='Your Role'
			width={600}
			closable={false}
			onClose={() => setOpen(!open)}
			open={open}
		>
			<p>Choose your role, Tell us what you want to be</p>
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
					{roles?.map((role, index) => (
						<div className="ltn__category-item ltn__category-item-5 bg-[#fdfbeb] ltn__category-item-5-2" key={index}>
						<div onClick={() =>{ 
							handleSelect(role.name)
							handleSubmit()
							}}>
							<span className="category-icon">
								<i className='flaticon-book'></i>
							</span>
							<span className="category-number">{role.id}</span>
							<span className="category-title">{role.name}</span>
							<span className="category-brief">{role.descrip}</span>
						</div>
					</div>
					))}
				</Flex>
			</Flex>
			{selectedRole === 'Agent' && (
				<Agent
					open={stepTwo}
					setOpen={setStepTwo}
					userRole={selectedRole}
					stepsOne={(val: boolean) => setOpen(val)}
				/>
			)}
			{selectedRole === 'Agency' && (
				<Agency
					open={stepTwo}
					setOpen={setStepTwo}
					userRole={selectedRole}
					stepsOne={(val: boolean) => setOpen(val)}
				/>
			)}
			{selectedRole === 'Client' && (
				<Client
					open={stepTwo}
					setOpen={setStepTwo}
					userRole={selectedRole}
					stepsOne={(val: boolean) => setOpen(val)}
				/>
			)}
			{selectedRole === 'Investor' && (
				<Investor
					open={stepTwo}
					setOpen={setStepTwo}
					userRole={selectedRole}
					stepsOne={(val: boolean) => setOpen(val)}
				/>
			)}
		</Drawer>
	);
};

export default StepOne;
