import React, { FC, FunctionComponent, KeyboardEventHandler, useRef, useState } from 'react';
import styles from './Layout.module.scss';
import { ILayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Up } from '../components';

export const Layout: FC<ILayoutProps> = ({ children }: ILayoutProps) => {
	// значение рефа бади
	const bodyRef = useRef<HTMLDivElement>(null);

	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<main className={styles.body} ref={bodyRef} tabIndex={0} role='main'>
				{children}
			</main>
			<Footer className={styles.footer} />
			<Up />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
