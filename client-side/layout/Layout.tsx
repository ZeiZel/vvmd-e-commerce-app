import React from 'react';
import styles from 'Layout.module.scss';
import { ILayoutProps } from './Layout.props';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';

export const Layout = ({ children }: ILayoutProps) => {
	return (
		<>
			<Header />
			<div>
				<Sidebar />
				<div>{children}</div>
			</div>
			<Footer />
		</>
	);
};
