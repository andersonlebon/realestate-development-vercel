import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab, Form } from 'react-bootstrap';
import {
	FaCalendarAlt,
	FaCarAlt,
	FaCookie,
	FaDollyFlatbed,
	FaHome,
} from 'react-icons/fa';
import Link from 'next/link';
import PriceRange from '../priceRange';
import { Form as AntdForm } from 'antd';
import { FaLocationDot } from 'react-icons/fa6';
import { TbProgress } from "react-icons/tb";
import { PiUsersLight } from "react-icons/pi";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { useGetAllAgentsOptions } from '@/hooks/agent';
import { useGetAllAgenciesOptions } from '@/hooks/agency'
import Loading from '@/components/loadings';
import { FadeLoader } from "react-spinners";




function CarDealerSearchFormTwo({onFinishFilter,range, setRange, flag, setFlag}) {
	const [selectedProvince, setSelectedProvince] = useState({
		name: 'Northern Province',
		districts: ['Burera', 'Gakenke', 'Musanze', 'Rulindo'],
		towns: ['Ruhengeri', 'Byumba'],
	});
	const { data: agents, isPending: loadingAgents, isError } = useGetAllAgentsOptions();
	const { data: agencies, isPending: loadingAgencies } = useGetAllAgenciesOptions()

	const provincesOfRwanda = [
		{
			name: 'Northern Province',
			districts: ['Burera', 'Gakenke', 'Musanze', 'Rulindo'],
			towns: ['Ruhengeri', 'Byumba'],
		},
		{
			name: 'Eastern Province',
			districts: [
				'Bugesera',
				'Gatsibo',
				'Kayonza',
				'Kirehe',
				'Ngoma',
				'Rwamagana',
			],
			towns: ['Rwamagana', 'Kibungo'],
		},
		{
			name: 'Southern Province',
			districts: [
				'Gisagara',
				'Huye',
				'Kamonyi',
				'Muhanga',
				'Nyamagabe',
				'Nyanza',
				'Ruhango',
			],
			towns: ['Butare', 'Huye', 'Gitarama'],
		},
		{
			name: 'Western Province',
			districts: [
				'Karongi',
				'Ngororero',
				'Nyabihu',
				'Nyamasheke',
				'Rubavu',
				'Rusizi',
			],
			towns: ['Gisenyi', 'Kibuye', 'Cyangugu'],
		},
		{
			name: 'Kigali City',
			districts: ['Gasabo', 'Kicukiro', 'Nyarugenge'],
			towns: ['Kigali'],
		},
	];

	const property_types = [
		'Apartment',
		'Duplex House',
		'Commercial',
		'Luxary Vilas',
		'Picture Studio',
		'Office',
		'Plot',
		'Industrial',
		'Retail',
		'Hotel',
		'Resort',
		'Farm',
		'Villa',
		'House',
	];


	return (
		<>
			<Container>

				{<Row>
					<Col xs={12}>
						<div className='slide-item-car-dealer-form'>
							<div className='ltn__car-dealer-form-tab'>
								<Tab.Container id='left-tabs-example' defaultActiveKey={flag}>
									<div className={`ltn__tab-menu text-uppercase`}>
										<Nav variant='pills'>
											<Nav.Item className='me-2'>
												<Nav.Link eventKey='sell' onClick={() => setFlag('sell')}>
													<FaHome />
													Sell Home
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey='rent' onClick={() => setFlag('rent')}>
													<FaHome />
													Rent Home
												</Nav.Link>
											</Nav.Item>
										</Nav>
									</div>

									<Tab.Content className='tab-content'>
										<Tab.Pane eventKey='sell'>
											<div className='car-dealer-form-inner'>
												<AntdForm
													className='ltn__car-dealer-form-box row'
													onFinish={onFinishFilter}
													initialValues={{}}
												>
													<Col
														xs={12}
														md={6}
														lg={4}
														className='ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar'
													>
														<AntdForm.Item
															name='property_type'
															className='w-full'
														>
														<div className='w-full'>
                            <span className='inline-icon'>
																<FaCalendarAlt />
															</span>
															<Form.Select
																className='nice-select w-full'
																name='property_type'
															>
                                <option>Property Type</option>
																{property_types.map((type, index) => {
																	return (
																		<option key={index} value={type.toLocaleLowerCase()}>
																			{type}
																		</option>
																	);
																})}
															</Form.Select>
                            </div>
														</AntdForm.Item>
													</Col>
													<Col
														xs={12}
														md={6}
														lg={4}
														className='ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car'
													>
                            <AntdForm.Item name='agent_id' className='w-full'>
                              <div className="w-full">
														<span className='inline-icon'>
															<PiUsersLight />
														</span>
														<Form.Select className='nice-select' name='agents'
														>
															{ loadingAgents ? <option className='px-2'>Loading...</option> :
																<option value='all' >Agents</option>}
                              {
                              agents?.items.map((agent, index) => {
                                  return (
                                    <option key={index} value={agent.id}>
                                      {agent.full_name}
                                    </option>
                                  )})
                              }
                             
														</Form.Select>
                            </div>
                            </AntdForm.Item>
													</Col>
													<Col
														xs={12}
														md={6}
														lg={4}
														className='ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter'
													>
                            <AntdForm.Item name='agency_id' className='w-full'>
                            <div className="w-full">
														<span className='inline-icon'>
															<MdOutlineRealEstateAgent />
														</span>
														{ 
															<Form.Select className='nice-select' name='agency_id'>
															{ loadingAgencies ? <option className='px-2'>Loading...</option> :
																<option value='all'>Agencies</option>}
                              { !loadingAgencies &&
                                agencies?.items.map((agency, index) => {
                                  return (
                                    <option key={index} value={agency.id}>{agency.name}</option>
                                  )})}  
														</Form.Select>}
                            </div>
                            </AntdForm.Item>
													</Col>
													<Col
														xs={12}
														md={6}
														lg={4}
														className='ltn__car-dealer-form-item ltn__custom-icon ltn__icon-ring'
													>
														<AntdForm.Item name='location' className='w-full'>
                            <div className="w-full">
															<span className='inline-icon'>
																<FaLocationDot />
															</span>
															<Form.Select
																className='nice-select'
																name='location'
																onChange={(e) =>
																	setSelectedProvince(
																		provincesOfRwanda.find(
																			(province) =>
																				province.name === e.target.value
																		)
																	)
																}
															>
                                <option>Province</option>
																{provincesOfRwanda.map((province, index) => {
																	return (
																		<option key={index} value={province.name}>
																			{province.name}
																		</option>
																	);
																})}
															</Form.Select>
                            </div>
														</AntdForm.Item>
													</Col>{' '}
													<Col
														xs={12}
														md={6}
														lg={4}
														className='ltn__car-dealer-form-item ltn__custom-icon ltn__icon-ring'
													>
														<AntdForm.Item name='location' className='w-full'>
                            <div className="w-full">
															<span className='inline-icon'>
																<FaLocationDot />
															</span>
															<Form.Select
																className='nice-select'
																name='location'
															>
                                <option>District</option>
																{selectedProvince.districts.map(
																	(district, index) => {
																		return (
																			<option key={index} value={district}>
																				{district}
																			</option>
																		);
																	}
																)}
															</Form.Select>
                            </div>
														</AntdForm.Item>
													</Col>{' '}
													<Col
														xs={12}
														md={6}
														lg={4}
														className='ltn__car-dealer-form-item ltn__custom-icon ltn__icon-ring'
													>
														<AntdForm.Item name='location' className='w-full'>
                            <div className="w-full">
															<span className='inline-icon'>
																<FaLocationDot />
															</span>
															<Form.Select
																className='nice-select'
																name='location'
															>
                                <option>City</option>
																{selectedProvince.towns.map((town, index) => {
																	return (
																		<option key={index} value={town}>
																			{town}
																		</option>
																	);
																})}
															</Form.Select>
                            </div>
														</AntdForm.Item>
													</Col>
													<Col
														xs={12}
														md={6}
														lg={4}
														className='ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog'
													>
                            <AntdForm.Item name='bedrooms' className='w-full'>
														<div className='input-item input-item-name ltn__custom-icon'>
															<input
																type='number'
																name='bedrooms'
																placeholder='Number of Bedrooms'
                                min={0}
															/>
														</div>
                            </AntdForm.Item>
													</Col>
													<Col
														xs={12}
														md={6}
														lg={4}
														className='ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog'
													>
                            <AntdForm.Item name='bathrooms' className='w-full'>
														<div className='input-item input-item-name ltn__custom-icon'>
															<input
																type='number'
                                name='bathrooms'
																placeholder='Number of Bathrooms'
                                min={0}
															/>
														</div>
                            </AntdForm.Item>
													</Col>

                          <Col xs={12} md={6} lg={4} className='ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog'>
                            <AntdForm.Item name='status' className='w-full'>
                            <div className="w-full">
                              < span className='inline-icon'>
                                <TbProgress />
                              </span>
                              <Form.Select className='nice-select' name='status'>
                                <option value='all'>Status</option>
                                {
                                 ['available', 'in_deal', 'rented', 'archived'].map((status, index) => {
                                  return (
                                    <option key={index} value={status}>
                                      {status}
                                    </option>
                                  )}
                                  )
                                }
                              </Form.Select>
                            </div>
                            </AntdForm.Item>
                          </Col>






                          

													<Col xs={12} className='car-price-filter-range'>
                            <AntdForm.Item name='price' className='w-full'>
														<div className='price_filter'>
															<PriceRange name='price' value={range} setValue={setRange} />
														</div>
                            </AntdForm.Item>

														<div className='btn-wrapper text-center'>
															<button
																type='submit'
																className='btn theme-btn-1 btn-effect-1 text-uppercase'
															>
																Search Inventory
															</ button>
														</div>
													</Col>
												</AntdForm>
											</div>
										</Tab.Pane>


										<Tab.Pane eventKey='rent'>
											<div className='car-dealer-form-inner'>
												<AntdForm
													className='ltn__car-dealer-form-box row'
													onFinish={onFinishFilter}
													initialValues={{}}
												>
													<Col
														xs={12}
														md={6}
														lg={4}
														className='ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar'
													>
														<AntdForm.Item
															name='property_type'
															className='w-full'
														>
														<div className='w-full'>
                            <span className='inline-icon'>
																<FaCalendarAlt />
															</span>
															<Form.Select
																className='nice-select w-full'
																name='property_type'
															>
                                <option>Property Type</option>
																{property_types.map((type, index) => {
																	return (
																		<option key={index} value={type.toLocaleLowerCase()}>
																			{type}
																		</option>
																	);
																})}
															</Form.Select>
                            </div>
														</AntdForm.Item>
													</Col>
													<Col
														xs={12}
														md={6}
														lg={4}
														className='ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car'
													>
                            <AntdForm.Item name='agent_id' className='w-full'>
                              <div className="w-full">
														<span className='inline-icon'>
															<PiUsersLight />
														</span>
														<Form.Select className='nice-select' name='agents'
														>
															<option value='all' >Agents</option>
                              {
                              agents?.items.map((agent, index) => {
                                  return (
                                    <option key={index} value={agent.id}>
                                      {agent.full_name}
                                    </option>
                                  )})
                              }
                             
														</Form.Select>
                            </div>
                            </AntdForm.Item>
													</Col>
													<Col
														xs={12}
														md={6}
														lg={4}
														className='ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter'
													>
                            <AntdForm.Item name='agenc_idy' className='w-full'>
                            <div className="w-full">
														<span className='inline-icon'>
															<MdOutlineRealEstateAgent />
														</span>
														<Form.Select className='nice-select' name='agency_id'>
															<option value='all'>Agencies</option>
                              {
                                agencies?.items.map((agency, index) => {
                                  return (
                                    <option key={index} value={agency.id}>{agency.name}</option>
                                  )})}  
														</Form.Select>
                            </div>
                            </AntdForm.Item>
													</Col>
													<Col
														xs={12}
														md={6}
														lg={4}
														className='ltn__car-dealer-form-item ltn__custom-icon ltn__icon-ring'
													>
														<AntdForm.Item name='location' className='w-full'>
                            <div className="w-full">
															<span className='inline-icon'>
																<FaLocationDot />
															</span>
															<Form.Select
																className='nice-select'
																name='location'
																onChange={(e) =>
																	setSelectedProvince(
																		provincesOfRwanda.find(
																			(province) =>
																				province.name === e.target.value
																		)
																	)
																}
															>
                                <option>Province</option>
																{provincesOfRwanda.map((province, index) => {
																	return (
																		<option key={index} value={province.name}>
																			{province.name}
																		</option>
																	);
																})}
															</Form.Select>
                            </div>
														</AntdForm.Item>
													</Col>{' '}
													<Col
														xs={12}
														md={6}
														lg={4}
														className='ltn__car-dealer-form-item ltn__custom-icon ltn__icon-ring'
													>
														<AntdForm.Item name='location' className='w-full'>
                            <div className="w-full">
															<span className='inline-icon'>
																<FaLocationDot />
															</span>
															<Form.Select
																className='nice-select'
																name='location'
															>
                                <option>District</option>
																{selectedProvince.districts.map(
																	(district, index) => {
																		return (
																			<option key={index} value={district}>
																				{district}
																			</option>
																		);
																	}
																)}
															</Form.Select>
                            </div>
														</AntdForm.Item>
													</Col>{' '}
													<Col
														xs={12}
														md={6}
														lg={4}
														className='ltn__car-dealer-form-item ltn__custom-icon ltn__icon-ring'
													>
														<AntdForm.Item name='location' className='w-full'>
                            <div className="w-full">
															<span className='inline-icon'>
																<FaLocationDot />
															</span>
															<Form.Select
																className='nice-select'
																name='location'
															>
                                <option>City</option>
																{selectedProvince.towns.map((town, index) => {
																	return (
																		<option key={index} value={town}>
																			{town}
																		</option>
																	);
																})}
															</Form.Select>
                            </div>
														</AntdForm.Item>
													</Col>
													<Col
														xs={12}
														md={6}
														lg={4}
														className='ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog'
													>
                            <AntdForm.Item name='bedrooms' className='w-full'>
														<div className='input-item input-item-name ltn__custom-icon'>
															<input
																type='number'
																name='bedrooms'
																placeholder='Number of Bedrooms'
                                min={0}
															/>
														</div>
                            </AntdForm.Item>
													</Col>
													<Col
														xs={12}
														md={6}
														lg={4}
														className='ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog'
													>
                            <AntdForm.Item name='bathrooms' className='w-full'>
														<div className='input-item input-item-name ltn__custom-icon'>
															<input
																type='number'
                                name='bathrooms'
																placeholder='Number of Bathrooms'
                                min={0}
															/>
														</div>
                            </AntdForm.Item>
													</Col>

                          <Col xs={12} md={6} lg={4} className='ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog'>
                            <AntdForm.Item name='status' className='w-full'>
                            <div className="w-full">
                              < span className='inline-icon'>
                                <TbProgress />
                              </span>
                              <Form.Select className='nice-select' name='status'>
                                <option value='all'>Status</option>
                                {
                                 ['available', 'in_deal', 'rented', 'archived'].map((status, index) => {
                                  return (
                                    <option key={index} value={status}>
                                      {status}
                                    </option>
                                  )}
                                  )
                                }
                              </Form.Select>
                            </div>
                            </AntdForm.Item>
                          </Col>






                          

													<Col xs={12} className='car-price-filter-range'>
                            <AntdForm.Item name='price' className='w-full'>
														<div className='price_filter'>
															<PriceRange name='price' value={range} setValue={setRange} />
														</div>
                            </AntdForm.Item>

														<div className='btn-wrapper text-center'>
															<button
																type='submit'
																className='btn theme-btn-1 btn-effect-1 text-uppercase'
															>
																Search Inventory
															</ button>
														</div>
													</Col>
												</AntdForm>
											</div>
										</Tab.Pane>
									</Tab.Content>
								</Tab.Container>
							</div>
						</div>
					</Col>
				</Row>}
			</Container>
		</>
	);
}
export default CarDealerSearchFormTwo;
