'use client';
import { useState } from 'react';
import { Col, ConfigProvider, Row } from 'antd';
import { AppContextProvider } from '@/context';
import { AppLayouteContextProvider } from '@/context/layout';
import theme from '@/theme/themeConfig';
import style from '../layout.module.scss';

import Header from '@/components/header';
import Footer from '@/components/footer/footer';
import ScrollToTop from '@/components/scroll-to-top';
import Authentication from '@/components/auth/page';
import CallToAction from '@/components/callToAction';
import { Container } from 'react-bootstrap';
import '../../config/sentry';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [toggleClassName, SetToggleClassName] = useState(false);
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

						<div className='min-h-[150vh]'>{children}</div>

						<div className={style.gradient_bg} />
						<div className='ltn__call-to-action-area w-full call-to-action-6 before-bg-bottom'>
							<Container>
								<CallToAction />
							</Container>
						</div>
						<Footer />
						<ScrollToTop />
					</div>
				</AppLayouteContextProvider>
			</AppContextProvider>
		</ConfigProvider>
	);
}
