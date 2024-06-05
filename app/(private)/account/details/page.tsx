'use client';
import React from 'react';
import { Row, Col, Tab } from 'react-bootstrap';
import {
	FaUserAlt,
	FaEnvelope,
	FaArrowDown,
	FaPencilAlt,
	FaPhoneAlt,
} from 'react-icons/fa';
import Link from 'next/link';

function MyAccount() {
	return (
		<>
			<Tab.Pane eventKey='details'>
				<div className='ltn__myaccount-tab-content-inner'>
					<p>
						The following addresses will be used on the checkout page by
						default.
					</p>
					<div className='ltn__form-box'>
						<form action='#'>
							<div className='row mb-50'>
								<Col xs={12} md={6}>
									<label>First name:</label>
									<input type='text' name='ltn__name' />
								</Col>
								<Col xs={12} md={6}>
									<label>Last name:</label>
									<input type='text' name='ltn__lastname' />
								</Col>
								<Col xs={12} md={6}>
									<label>Display Name:</label>
									<input type='text' name='ltn__lastname' placeholder='Ethan' />
								</Col>
								<Col xs={12} md={6}>
									<label>Display Email:</label>
									<input
										type='email'
										name='ltn__lastname'
										placeholder='example@example.com'
									/>
								</Col>
							</div>
							<fieldset>
								<legend>Password change</legend>
								<Row>
									<div className='col-md-12'>
										<label>
											Current password (leave blank to leave unchanged):
										</label>
										<input type='password' name='ltn__name' />
										<label>
											New password (leave blank to leave unchanged):
										</label>
										<input type='password' name='ltn__lastname' />
										<label>Confirm new password:</label>
										<input type='password' name='ltn__lastname' />
									</div>
								</Row>
							</fieldset>
							<div className='btn-wrapper'>
								<button
									type='submit'
									className='btn theme-btn-1 btn-effect-1 text-uppercase'
								>
									Save Changes
								</button>
							</div>
						</form>
					</div>
				</div>
			</Tab.Pane>
		</>
	);
}

export default MyAccount;
