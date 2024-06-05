import { kigaliResidences } from '@/constents';
import countryCodes from '@/constents/countryCode';
import { BookFilled, LockOutlined, PhoneOutlined, SelectOutlined, UserOutlined } from '@ant-design/icons';
import type { CascaderProps } from 'antd';
import {
  AutoComplete,
  Button,
	Drawer,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
	Flex,
  DatePicker,
  message,
} from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import React, { FC, useState } from 'react';
import StepOne from './stepOne';
import style from '../style.module.scss';
import { useSignup } from '@/hooks/auth/index.';
// import StepOne from './stepOne';
const { Option } = Select;

interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}


interface RegisterModalProps {
	loginModalVisible: boolean;
	registerModalVisible: boolean;
	setLoginModal: (val: boolean) => void;
	setRegisterModal: (val: boolean) => void;
}

const RegisterModal:FC<RegisterModalProps> = (
	{
		loginModalVisible,
		registerModalVisible,
		setLoginModal,
		setRegisterModal,
	}
) => {
  const [form] = Form.useForm();
	const [stepOne, setStepOne] = useState(false);
  const [userResponse, setUserResponse] = useState({})
  const { mutate } = useSignup()

  const onFinish = (values: any) => {
   mutate(values,{
     onSuccess: (response) =>{
      setStepOne(true);
      message.success('Account created successfully')
      message.success('Check you email, to confirm your account')
      setUserResponse(response.data.data)
     }, 
     onError: ({response}) => {
      response.data.errors.full_messages.map(error => {
        message.error(error)
      })

     }
   })
  };


  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);
	const filter = (inputValue: string, path: DefaultOptionType[]) =>
  path.some(
    (option) => (option.label as string).toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
  );

  return (
		<Drawer
			title={<span className='text-center'>Register</span>}
			width={520}
			closable={false}
			onClose={() => setRegisterModal(false)}
			open={registerModalVisible}
      className=''
		>
			<Flex align='center' className='w-full' vertical gap={50}>
			<div className='flex justify-center items-center w-[200px] h-[200px] bg-primary2 rounded-md shadow-md'>
          <h1 className='text-xl text-white'>Logo</h1>
        </div>
    <Form
      // {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{ 
				// gender: 'male'
				
			 }}
      style={{ maxWidth: 600 }}
      scrollToFirstError
			className={style.registerForm}
    >
      <Form.Item className='my-2'
        name="first_name"
        rules={[
          {
            required: true,
            message: 'Please input your First name!',
          },
        ]}
      >
        <Input
					placeholder="First name"
					prefix={<UserOutlined className='site-form-item-icon' />}

				 />
      </Form.Item>  <Form.Item className='my-2'
        name="last_name"
        rules={[
          {
            required: true,
            message: 'Please input your Last name!',
          },
        ]}
      >
        <Input
					placeholder="last_name"
					prefix={<UserOutlined className='site-form-item-icon' />}

				 />
      </Form.Item>  

      <Form.Item className='my-2'
        name="sur_name"
      >
        <Input
					placeholder="Surname"
					prefix={<UserOutlined className='site-form-item-icon' />}

				 />
      </Form.Item>
      
      <Form.Item className='my-2'
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input
					placeholder="email"
					prefix={<UserOutlined className='site-form-item-icon' />}

				 />
      </Form.Item>

      <Form.Item className='my-2'
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password
					placeholder="password"
					prefix={<LockOutlined className='site-form-item-icon' />}
				/>
      </Form.Item>

      <Form.Item className='my-2'
        name="confirm_confimation"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password 
				prefix={<LockOutlined className='site-form-item-icon' />}
				placeholder="confirm password"
				/>
      </Form.Item>

      <Form.Item className='my-2'
        name="adress"
        rules={[
          { type: 'array', required: true, message: 'Please select your habitual residence!' },
        ]}>
        <Cascader
          style={{height: '53px'}}
          options={kigaliResidences as CascaderProps<DataNodeType>['options']} 
					placeholder="Please select your habitual residence"
				  suffixIcon={<SelectOutlined className='site-form-item-icon' />}
					showSearch={{ filter }}
					onSearch={(value) => console.log(value)}
					
				/>
    
      </Form.Item>

      <Form.Item className='my-2'
        name="phone_number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input style={{ width: '100%' }} 
					placeholder="phone number"
					prefix={<PhoneOutlined className='site-form-item-icon' />}

				/>
      </Form.Item>

      <Form.Item className='my-2'
        name="age"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <DatePicker
        style={{ width: '100%', height: '50px'}}
        placeholder='Birth day'
				/>
      </Form.Item>

			<Form.Item className='my-2'
        name="gender"
        rules={[{ required: true, message: 'Please select gender!' }]}
      >
        <Select placeholder="select your gender"
          style={{height: '53px'}}
					suffixIcon={<SelectOutlined className='site-form-item-icon' />}
				>
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      
      <Form.Item className='my-2'>
        <Button type="primary2" htmlType="submit"
				className='flex w-full justify-center rounded-md bg-primary2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary2-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'

				>
         Next
        </Button>
      </Form.Item>
    </Form>
			</Flex>

		<StepOne 
			setLoginModal={setLoginModal}
			loginModalVisible={loginModalVisible}
			setRegisterModal={setRegisterModal}
      user={userResponse}
			registerModalVisible={registerModalVisible}
		  open={stepOne}
			setOpen={setStepOne}
		/>
		
		</Drawer>

  );
};

export default RegisterModal;
