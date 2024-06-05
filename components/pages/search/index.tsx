'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import ModalVideo from 'react-modal-video';
import CallToAction from '@/components/callToAction';
import CarDealerSearchFormTwo from '@/components/carDealerSearchForm';
import SearchMap from '@/components/map';
import {
	PropertiesFilterParams,
	// useGetPropertiesFilter,
} from '@/hooks/properties';
import { ResultFount } from '../../carDealerSearchForm/ResultFount';
import { useGetPropertiesFilter } from '../../../hooks/properties';
import { useGetAllAgents } from '../../../hooks/agent';
import Loading from '@/components/loadings';
import Home from '@/components/pages/home';

function HomePage() {
	const queryClient = useQueryClient();
	const [filterParams, setFilterParams] =
		useState<PropertiesFilterParams>(null);
	const [flag, setFlag] = useState('sell');
	const [range, setRange] = useState([0, 1000000]);

	const { data: agentsData, isPending: agentsPending } = useGetAllAgents();

	const {
		data: propertiesData,
		isPending: propertiesPending,
		isError,
		isFetching,
		refetch: refetchPropertiesData,
	} = useGetPropertiesFilter(filterParams);

	const [min_price, max_price] = range;

	const onFinishFilter = (values: PropertiesFilterParams) => {
		setFilterParams({ ...values, flag, max_price, min_price });
	};

	useEffect(() => {
		if (filterParams) {
			queryClient.invalidateQueries({
				queryKey: ['getPropertiesFilter', filterParams],
			});
			refetchPropertiesData();
		}
	}, [filterParams]);

	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<ModalVideo
				channel='youtube'
				autoplay
				isOpen={isOpen}
				videoId='LjCzPp-MK48'
				onClose={() => setOpen(false)}
			/>
			<div className='ltn__google-map-locations-area'>
				<div id='gmap'>
					{/* <GooglePlaceMap /> */}
					<SearchMap />
				</div>
			</div>
      {propertiesPending || isFetching ?  <Loading/> : <></>}

			{/* CAR DEALER FORM AREA START */}
			<div className='ltn__car-dealer-form-area mt-[-15%]  mb-120'>
				<Container className='bg-[#FBF8E2] relative z-100 p-5 rounded'>
					<Row>
						<Col xs={12}>
							<div className='ltn__car-dealer-form-tab'>
								<CarDealerSearchFormTwo
									onFinishFilter={onFinishFilter}
									flag={flag}
									setFlag={setFlag}
									range={range}
									setRange={setRange}
								/>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			{filterParams != null && (
				<ResultFount
					propertiesData={propertiesData}
					setFilterParams={setFilterParams}
				/>
			)}
			<Home />
			{/* <!-- CALL TO ACTION END --> */}
		</>
	);
}

export default HomePage;
