'use client';

import React, { FC, useEffect, useState } from 'react';
import { IHeaderProps } from './Header.props';
import cn from 'classnames';
import styles from './Header.module.scss';
import { AuthForm, Button, Card } from '../../components';
import Image from 'next/image';
import Link from 'next/link';
import { TG_PATH, VK_PATH, YT_PATH } from '../../api/helper.api';
import { isBrowser } from '../../helpers';

export const Header: FC<IHeaderProps> = ({ className, ...props }: IHeaderProps): JSX.Element => {
	const [scroll, setScroll] = useState<boolean>(false);

	const userId = !isBrowser ? localStorage.getItem('user-id') : null;

	useEffect(() => {
		if (isBrowser) {
			return;
		}

		const onScroll = () => {
			if (window.scrollY > 50) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<Card
			color={'black'}
			className={cn(className, styles.header, {
				[styles.scrolled]: scroll,
			})}
			{...props}
		>
			<header className={styles.header__wrapper}>
				<div className={styles.header__logo}>
					<Link href={'/'}>
						<Image src={'/logo.png'} alt={'logo'} width={200} height={100} />
					</Link>
				</div>

				<nav className={styles.header__nav}>
					<ul className={styles.header__links}>
						<li className={styles['header__links-item']}>
							<Link href={'/catalog'}>Каталог</Link>
						</li>
						<li className={styles['header__links-item']}>
							<Link href={'/buy'}>Купить</Link>
						</li>
						<li className={styles['header__links-item']}>
							<Link href={'/about'}>О компании</Link>
						</li>
						<li className={styles['header__links-item']}>
							<Link href={'/contacts'}>Связаться</Link>
						</li>
					</ul>
				</nav>

				<div className={styles.header__contacts}>
					<Link href={VK_PATH} className={styles['header__contacts-link']}>
						<Image src={'/vk.png'} alt={'vk logo'} width={30} height={30} />
					</Link>
					<Link href={TG_PATH} className={styles['header__contacts-link']}>
						<Image src={'/tg.png'} alt={'vk logo'} width={30} height={30} />
					</Link>
					<Link href={YT_PATH} className={styles['header__contacts-link']}>
						<Image src={'/youtube.png'} alt={'vk logo'} width={30} height={30} />
					</Link>
					{typeof window === 'undefined' ? (
						<div></div>
					) : localStorage.getItem('token') ? (
						<Button arrow={'none'} appearance={'ghost'}>
							<Link href={`/shoppingcart/${userId}`}>Корзина</Link>
						</Button>
					) : (
						<AuthForm />
					)}
				</div>
			</header>
		</Card>
	);
};
