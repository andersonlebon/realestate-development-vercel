import Link from 'next/link';
import Image from 'next/image';
import { getRadom } from '@/lib/utils';
const PropertyItem = ({ property, baseUrl }) => {
	return (
		<>
			<div className='ltn__search-by-place-item my-3'>
				<Link className='search-by-place-img' href={`$baseUrl`}>
					<img src={getRadom(property?.images).url} alt={property?.name} />
				</Link>

				<div className='search-by-place-info'>
					<h4 className='capitalize'>{property?.title}</h4>
					<h6 className='capitalize price'>{property?.price} K for <span className='uppercase'>{property?.flag}</span><span className='text-gray-800 lowercase'>{property?.flag === 'rent' ? `/${property?.rate}` : ""}</span></h6>
					<ul className='text-xs flex flex-wrap'>
						{Object.entries(property.details).map(([detailsName, detail]) => {
							if (typeof detail === 'object') return false;
							return (
								<li className='px-2 m-0' key={detailsName}>
									<strong className='capitalize'>{detailsName}: </strong>
									{typeof detail === 'string' && <>{detail}</>}
									{typeof detail === 'number' && <>{detail}</>}
								</li>
							);
						})}
					</ul>

					<div className='search-by-place-btn'>
						<Link href={`${baseUrl}/${property?.id}`}>
							View Property <i className='flaticon-right-arrow'></i>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default PropertyItem;
