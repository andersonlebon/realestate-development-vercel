import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import { getRadom } from '@/lib/utils';
import { Empty } from 'antd';

const PropertyCategories = ({ properties }) => {
	return (
		<>
			<Row>
				{Object.entries(properties).map(([name, val], index) => {

						return val.length === 0 ? (
							<Col xs={12} md={6} lg={name === 'appartments' ? 8 : 4} key={index}>
								<div className='ltn__banner-item ltn__banner-style-4 text-color-white'>
									<div className='ltn__banner-info flex flex-col'>
										<h3>
											<Link
												href={`/search?search=${name}`}
												className='capitalize'
											>
												{name}
											</Link>
										</h3>
										<Empty className="m-0" image={Empty.PRESENTED_IMAGE_SIMPLE} />
									</div>
								</div>
							</Col>
						) : (
							<Col xs={12} md={6} lg={name === 'appartments' ? 8 : 4} key={index}>
								<div
									className='ltn__banner-item ltn__banner-style-4 text-color-white bg-image'
									style={{
										backgroundImage: `url("${getRadom(getRadom(val).images).url}")`,
									}}
								>
									<div className='ltn__banner-info'>
										<h3>
											<Link
												href={`/search?search=${name}`}
												className='capitalize'
											>
												{name}
											</Link>
										</h3>
										<p> Great Deals Available</p>
										<mark>{val.length} Listings</mark>
									</div>
								</div>
							</Col>
						)
				})}
			</Row>
		</>
	);
};

export default PropertyCategories;
