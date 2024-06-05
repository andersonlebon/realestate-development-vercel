import { useAppContext } from '@/context';
import { Drawer, Button, Card, Space, Radio, Flex, Col, Divider, Row } from 'antd';
import React, { FC, useState } from 'react';



interface DescriptionItemProps {
  title: string;
  content: React.ReactNode;
}

const DescriptionItem = ({ title, content }: DescriptionItemProps) => (
  <div className="site-description-item-profile-wrapper w-full">
    <p className="site-description-item-profile-p-label">{title}:{' '} {content}</p>
  </div>
);


interface StepTwoProps {
	setOpen: (value: boolean) => void;
  stepsOne: (value: boolean) => void;
	open: boolean;
  userRole: string;
}


const StepTwo: FC<StepTwoProps> = ({
	open,
	setOpen,
  userRole,
  stepsOne
}) => {
  const { setRegisterModal } = useAppContext();
	return (
		<Drawer
			title='Revise'
			width={520}
			closable={false}
			onClose={() => setOpen(!open)}
			open={open}
		>
				<p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
          User Profile
        </p>
        <p className="site-description-item-profile-p">Personal</p>
        <Row className='my-2'>
          <Col span={12}>
            <DescriptionItem title="Full Name" content="Lily" />
          </Col>
        </Row>
            <DescriptionItem title="Account" content="AntDesign@example.com" />
        <Row className='my-2'>

        </Row>
        <Row className='my-2'>

          <Col span={12}>
            <DescriptionItem title="City" content="HangZhou" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Country" content="Rwanda" />
          </Col>
        </Row>
        <Row className='my-2'>
          <Col span={12}>
            <DescriptionItem title="Birthday" content="February 2,1900" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Phone Number" content="+250785217291" />
          </Col>
        </Row>
        <Row className='my-2'>
          <Col span={24}>
            <DescriptionItem
              title="About me"
              content="Make things as simple as possible but no simpler."
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Role({userRole})</p>
        <Row className='my-2'>
          <Col span={12}>
            <DescriptionItem title="Position" content="Programmer" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Responsibilities" content="Coding" />
          </Col>
        </Row>
        <Row className='my-2'>
          <Col span={12}>
            <DescriptionItem title="Department" content="XTech" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
          </Col>
        </Row>
        <Row className='my-2'>
          <Col span={24}>
            <DescriptionItem
              title="Skills"
              content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Contacts</p>
        <Row className='my-2'>
          <Col span={12}>
            <DescriptionItem title="Email" content="AntDesign@example.com" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
          </Col>
        </Row>
        <Row className='my-2'>
          <Col span={24}>
            <DescriptionItem
              title="Github"
              content={
                <a href="http://github.com/ant-design/ant-design/">
                  github.com/ant-design/ant-design/
                </a>
              }
            />
          </Col>
        </Row>
				<Button type="primary"
				className='flex w-full my-5 justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
         onClick={() => {
           setOpen(false)
           stepsOne(false)
          setRegisterModal(false)


				 }}
				>
         Submit
        </Button>			
		</Drawer>
	);
};

export default StepTwo;
