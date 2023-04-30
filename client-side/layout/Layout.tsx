import React, { FC, FunctionComponent, useRef, useState } from 'react';
import styles from './Layout.module.scss';
import { ILayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import cn from 'classnames';
import { Up } from '../components';

export const Layout: FC<ILayoutProps> = ({ children }: ILayoutProps) => {
	// состояние ссылки
	const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false);
	// значение рефа бади
	const bodyRef = useRef<HTMLDivElement>(null);

	// пропуск
	const skipContentAction = (key: KeyboardEvent) => {
		if (key.code == 'Space' || key.code == 'Enter') {
			key.preventDefault();
			bodyRef.current?.focus();
		}
		setIsSkipLinkDisplayed(false);
	};

	return (
		<div className={styles.wrapper}>
			{/* это ссылка для организации быстрого перехода к контенту страницы, которая видима только при переходе с клавиатуры */}
			<a
				onFocus={() => setIsSkipLinkDisplayed(true)}
				tabIndex={0}
				className={cn(styles.skipLink, {
					[styles.displayed]: isSkipLinkDisplayed,
				})}
				onKeyDown={skipContentAction}
			>
				Сразу к содержанию
			</a>
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
