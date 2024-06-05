import type { Metadata } from 'next';
import { theme as antdTheme } from 'antd';
import style from './layout.module.scss';
import theme from '@/theme/themeConfig';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import React from 'react';
import 'animate.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import '@/assets/sass/style.scss';
import '@/assets/responsive.css';

const metadata: Metadata = {
	title: 'Real estate App',
	description: 'Generated by create next app',
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				style={{
					backgroundColor: theme?.token.colorBgLayout,
					color: theme?.token.colorText,
				}}
				className={style.layout}
				suppressHydrationWarning={true}
			>
				{children}
			</body>
		</html>
	);
}
