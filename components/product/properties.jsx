import Link from 'next/link';
import Image from 'next/image';
import { getRadom } from '@/lib/utils';
import { Empty } from 'antd';

const PropertyItemItem = ({ property, baseUrl }) => {
	const [propertyName, propertyData] = property;
	return (
		<>
			{propertyData && (
				<div className='ltn__search-by-place-item'>
					<div className='search-by-place-img'>
						{propertyData.length === 0 ? (
							<div className='min-h-[180px] flex items-center justify-center'> <Empty className='m-0' image={Empty.PRESENTED_IMAGE_SIMPLE} /></div>
						) : (
							<Link href={`${baseUrl}?location=${propertyName}`}>
								<img
									src={getRadom(getRadom(propertyData)?.images).url}
									alt={propertyData.name}
								/>
							</Link>
						)}
						<div className='search-by-place-badge'>
							<ul>
								<li>{propertyData.length} Properties</li>
							</ul>
						</div>
					</div>
					<div className='search-by-place-info'>
						<h6 className='capitalize'>
							<Link href={`${baseUrl}?location=${propertyName}`}>
								{propertyName}
							</Link>
						</h6>
						<div className='search-by-place-btn'>
							<Link href={`${baseUrl}?location=${propertyName}`}>
								View Properties <i className='flaticon-right-arrow'></i>
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default PropertyItemItem;
