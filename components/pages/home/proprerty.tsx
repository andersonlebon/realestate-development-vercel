import { Flex } from 'antd';
import Link from 'next/link';
import React from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { getRadom } from '@/lib/utils';

const PropertyLocation = ({ properties }) => {
	return (
		<Tab.Container defaultActiveKey={properties[0]?.id}>
			<div className='ltn__tab-menu ltn__tab-menu-4 text-center relative z-1 hidden md:block'>
				<Nav className='hidden md:block'>
					{properties.map((property) => {
						return (
							<Nav.Link
								className='hidden md:block'
								key={property.id}
								eventKey={property.id}
							>
								<img
									src={getRadom(property.images).url}
									alt={property.name}
									className='w-[50px]'
								/>
							</Nav.Link>
						);
					})}
				</Nav>
			</div>
			<Tab.Content>
				{properties.map((property) => {
					return (
						<Tab.Pane eventKey={property.id} key={property.id}>
							<div className='ltn__neighbour-tab-content-inner relative z-100'>
								<div className='row'>
									<div className='col-lg-8'>
										<div className='neighbour-apartments-img md:w-[720px] md:h-[520px]'>
											<img
												src={getRadom(property.images).url}
												alt={property.name}
												className='h-full w-full'
											/>
										</div>
									</div>
									<div className='col-lg-4'>
										<div className='ltn__search-by-place-item neighbour-apartments-item h-full m-0'>
											<div className='search-by-place-img'>
												<Link href={`/properties/${property.id}`}>
													<div className='md:h-[240px]'>
														<img
															src={getRadom(property.images).url}
															alt={property.name}
															className='w-full h-full'
														/>
													</div>
												</Link>
											</div>
											<div className='search-by-place-info'>
												<h4>
													<Link href={`/properties/${property.id}`}>
														{property.name}
													</Link>
												</h4>
												<label>
													<span className='ltn__secondary-color'>1,500m </span>/
													21 min. walk
												</label>
												<div className='search-by-place-brief'>
													<p>{property.description}</p>
												</div>
												<div className='search-by-place-btn'>
													<Link href={`/properties/${property.id}`}>
														View Property{' '}
														<i className='flaticon-right-arrow'></i>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Tab.Pane>
					);
				})}
			</Tab.Content>
		</Tab.Container>
	);
};

export default PropertyLocation;
