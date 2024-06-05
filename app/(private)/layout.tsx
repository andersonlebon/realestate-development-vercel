'use client';
import type { Metadata } from 'next';
import { ConfigProvider } from 'antd';
import { theme as antdTheme } from 'antd';
import { AppContextProvider } from '@/context';
import { AppLayouteContextProvider } from '@/context/layout';

import style from '../layout.module.scss';
import theme from '@/theme/themeConfig';

import 'bootstrap/dist/css/bootstrap.css';
import '../layout.module.scss';
import React from 'react';
import 'animate.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'node_modules/react-modal-video/scss/modal-video.scss';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import '@/assets/sass/style.scss';
import '@/assets/responsive.css';
import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer/footer';
import ScrollToTop from '@/components/scroll-to-top';
import { useLoadScript } from '@react-google-maps/api';
import Authentication from '@/components/auth/page';
import { google_maps_api_key } from '../../config';

const { useToken } = antdTheme;

const metadata: Metadata = {
	title: 'Real estate App',
	description: 'Generated by create next app',
};

const libraries = ['places'];

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [toggleClassName, SetToggleClassName] = useState(false);
	useLoadScript({
		googleMapsApiKey: google_maps_api_key,
		libraries,
	});

	function toggleClassNameInBody() {
		SetToggleClassName((toggleClassName) => !toggleClassName);
	}


	return (
			<ConfigProvider theme={theme}>
					<AppContextProvider>
							<AppLayouteContextProvider>
								<div
									className={`body-wrapper ${
										toggleClassName ? 'ltn__utilize-open' : ''
									}`}
								>
									<Header
										toggleClassNameInBody={toggleClassNameInBody}
										SetToggleClassName={SetToggleClassName}
										topbar={true}
									/>
									<Authentication />
									
										<div className='min-h-[150vh]'>

										{children}
										</div>

									<div className={style.gradient_bg} />
									<Footer />
									<ScrollToTop />
								</div>
							</AppLayouteContextProvider>
					</AppContextProvider>
			</ConfigProvider>
	);
}