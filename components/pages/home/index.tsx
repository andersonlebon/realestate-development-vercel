'use client';
import Image from 'next/image';

import React, { useState } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { getProducts, productSlug } from '@/lib/product';
import PropertyItem from '@/components/product/properties';
import TitleSection from '@/components/titleSection';
import { FaArrowLeft, FaArrowRight, FaPlay } from 'react-icons/fa';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import AminitiesItemTwo from '@/components/aminities/item';
import aminitiesData from '@/data/aminities/index.json';
import blogData from '@/data/blog';
import BlogItem from '@/components/blog';
import HeroSectionStyleTwo from '@/components/hero';
import PropertyCategories from '@/components/PropertyCategories';
import TeamItem from '@/components/team';
import { useGetHomeInfo } from '@/hooks/home';
import Loading from '@/components/loadings';
import { Empty } from 'antd';

function HomeVersionEleven(props) {
	const [isOpen, setOpen] = useState(false);
	const { data: homeData, isPending } = useGetHomeInfo();
	// const { top_10_agencies, properties_by_categories, agencies } = data

	const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
		<button
			{...props}
			className={
				'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
			}
			aria-hidden='true'
			aria-disabled={currentSlide === 0 ? true : false}
			type='button'
		>
			<FaArrowLeft />
		</button>
	);
	const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
		<button
			{...props}
			className={
				'slick-next slick-arrow' +
				(currentSlide === slideCount - 1 ? ' slick-disabled' : '')
			}
			aria-hidden='true'
			aria-disabled={currentSlide === slideCount - 1 ? true : false}
			type='button'
		>
			<FaArrowRight />
		</button>
	);

	const productsettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: <SlickArrowLeft />,
		nextArrow: <SlickArrowRight />,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					arrows: false,
					dots: true,
				},
			},
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 580,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const blogSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: <SlickArrowLeft />,
		nextArrow: <SlickArrowRight />,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	if (isPending || !homeData) return <Loading />;
	return (
		<>
			<ModalVideo
				channel='youtube'
				autoplay
				isOpen={isOpen}
				videoId='LjCzPp-MK48'
				onClose={() => setOpen(false)}
			/>

			<div className='ltn__banner-area pt-100'>
				<Container>
					<Row>
						<Col xs={12}>
							<TitleSection
								sectionClasses='text-center'
								headingClasses='section-subtitle-2 ltn__secondary-color'
								titleSectionData={{
									subTitle: 'Property',
									title: 'Property By Categories',
								}}
							/>
						</Col>
					</Row>

					<PropertyCategories properties={homeData.properties_by_categories} />
				</Container>
			</div>

			<div className='ltn__search-by-place-area before-bg-top pt-115 pb-70'>
				<Container>
					<Row>
						<Col xs={12}>
							<div className='section-title-area'>
								<h6 className='section-subtitle ltn__secondary-color'>
									Area Properties
								</h6>
								<h1 className='section-title'>
									Find Your Dream House <br />
									Search By Area
								</h1>
							</div>
						</Col>
					</Row>

					{
						<Slider
							{...productsettings}
							className='ltn__product-slider-item-four-active-full-width slick-arrow-1'
						>
							{Object.entries(homeData?.properties_by_locations).map(
								(property, key) => {
									return (
										<PropertyItem
											key={key}
											property={property}
											baseUrl='/properties'
										/>
									);
								}
							)}
						</Slider>
					}
				</Container>
			</div>

			<div className='ltn__category-area ltn__product-gutter pt-115 pb-70'>
				<Container>
					<Row>
						<Col xs={12}>
							<TitleSection
								sectionClasses='text-center'
								headingClasses=''
								titleSectionData={{
									subTitle: 'Our Aminities',
									title: 'Building Aminities',
									additionalClassName: '',
								}}
							/>
						</Col>
					</Row>

					<Row className='slick-arrow-1 justify-content-center'>
						{aminitiesData.map((data, key) => {
							return (
								<Col key={key} xs={12} sm={6} md={4} lg={3}>
									<AminitiesItemTwo data={data} />
								</Col>
							);
						})}
					</Row>
				</Container>
			</div>

			<div className='ltn__slider-area ltn__slider-11 section-bg-1'>
				<HeroSectionStyleTwo agencies={homeData?.top_10_agencies} />
			</div>

			<div className='ltn__team-area py-32 '>
				<Container>
					<Row>
						<Col lg={12}>
							<TitleSection
								sectionClasses='text-center'
								headingClasses=''
								titleSectionData={{
									subTitle: 'Agents',
									title: 'Agents ready to help',
								}}
							/>
						</Col>
					</Row>
					<Row>
						<Slider
							{...productsettings}
							className='ltn__product-slider-item-four-active-full-width slick-arrow-1'
						>
							{homeData.agents.map((agent, key) => {
								return (
									<Col key={key} xs={12} sm={6} lg={4}>
										<TeamItem
											baseUrl='agents'
											data={agent}
											additionalClassname=''
										/>
									</Col>
								);
							})}
							{homeData.agents.length === 0 && (
								<Empty className='m-0' image={Empty.PRESENTED_IMAGE_SIMPLE} />
							)}
						</Slider>
					</Row>
					<Row>
						<Link className='ml-16 flex items-center	' href={`/agents`}>
							<span>Se more Agents</span>
							<i className='flaticon-right-arrow px-2 leading-none'></i>
						</Link>
					</Row>
				</Container>
			</div>

			{/* <div className='ltn__blog-area pb-70'>
				<Container>
					<Row>
						<Col lg={12}>
							<TitleSection
								sectionClasses='text-center'
								headingClasses=''
								titleSectionData={{
									subTitle: 'News & Blogs',
									title: 'Leatest News Feeds',
								}}
							/>
						</Col>
					</Row>
					<Slider
						{...blogSettings}
						className='ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal'
					>
						{blogData.map((data, key) => {
							const slug = productSlug(data.title);
							return (
								<BlogItem key={key} baseUrl='/blog' data={data} slug={slug} />
							);
						})}
					</Slider>
				</Container>
			</div> */}
		</>
	);
}

export default HomeVersionEleven;
