'use client';
import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import ShopBreadCrumb from '@/components/breadCrumbs/shop';
import CallToAction from '@/components/callToAction';
import {
	FaHome,
	FaUserAlt,
	FaMapMarkerAlt,
	FaList,
	FaHeart,
	FaMapMarked,
	FaDollarSign,
	FaSignOutAlt,
	FaLock,
} from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/auth';
import { message } from 'antd';
import { useAppContext } from '@/context';

function MyAccount({ children }) {
  const { role , isAuthenticated} = useAuthContext();
  const { setLoginModal } = useAppContext()
  const router = useRouter();


	const menuData = [
		{ name: 'Dashboard', icon: <FaHome />, link: "dashboard" },
		{ name: 'Profile', icon: <FaUserAlt />, link:"profile"},
		{ name: 'My Properties', icon: <FaList /> , link: "properties" },
		// { name: 'Properties on deal', icon: <FaHeart /> },
		{ name: 'Account Details', icon: <FaUserAlt />, link:"details" },
		{ name: 'Add Property', icon: <FaMapMarked />, link:"new-property" },
		{ name: 'Payments', icon: <FaDollarSign />, link:"payments"},
		{ name: 'Change Password  ', icon: <FaLock /> , link:"settings"},
	];

  
  if(!isAuthenticated && !role ) {
    message.error('You need to Login to access this page')
    return router.push('/')
  }


	return (
		<>
			<ShopBreadCrumb title='Account' sectionPace='' currentSlug='account' />

			{/* <!-- LOGIN AREA START --> */}
			<div className='liton__wishlist-area pb-70 min-h-screen'>
				<Container>
					<Row>
						<Col xs={12}>
							{/* <!-- PRODUCT TAB AREA START --> */}
							<div className='ltn__product-tab-area '>
								<Tab.Container
									id='left-tabs-example'
									defaultActiveKey='dashboard'
								>
									<Row>
										<Col xs={12} lg={4}>
											<div className='ltn__tab-menu-list mb-50 '>
												<Nav variant='pills' className='flex-column bg-white'>
													{menuData.map((nav, key) => (
														<Nav.Item key={key}>
															<Nav.Link
																eventKey={nav.link.toLocaleLowerCase()}
																onClick={() =>
																	router.push(`/account/${nav?.link?.toLocaleLowerCase()}`)
																}
															>
																{nav.name} {nav.icon}
															</Nav.Link>
														</Nav.Item>
													))}
													<Nav.Item>
														<Nav.Link href='/auth'>
															Logout <FaSignOutAlt />
														</Nav.Link>
													</Nav.Item>
												</Nav>
											</div>
										</Col>
										<Col xs={12} lg={8}>
											<Tab.Content>{children}</Tab.Content>
										</Col>
									</Row>
								</Tab.Container>
							</div>
							{/* <!-- PRODUCT TAB AREA END --> */}
						</Col>
					</Row>
				</Container>
			</div>
			{/* <!-- LOGIN AREA END --> */}

			<div className='ltn__call-to-action-area call-to-action-6 before-bg-bottom'>
				<Container>
					<Row>
						<Col xs={12}>
							<CallToAction />
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default MyAccount;
