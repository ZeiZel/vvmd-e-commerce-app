import React, { FC, useEffect, useState } from 'react';
import { IHeaderProps } from './Header.props';
import cn from 'classnames';
import styles from './Header.module.scss';
import { AuthButton, Card, ShoppingCartModal } from '../../components';
import Image from 'next/image';
import Link from 'next/link';
import { TG_PATH, VK_PATH, YT_PATH } from '../../api/helper.api';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const Header = ({ className, ...props }: IHeaderProps): JSX.Element => {
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const [prevScrollPosition, setPrevScrollPosition] = useState<number>(0);
	const [showHeader, setShowHeader] = useState<boolean>(true);

	// const [userId] = useLocalStorage('user', '');

	useEffect(() => {
		const handleScroll = () => {
			const currentPosition = window.pageYOffset;
			setScrollPosition(currentPosition);

			if (prevScrollPosition < currentPosition && showHeader) {
				setShowHeader(false);
			}

			if (prevScrollPosition > currentPosition && !showHeader) {
				setShowHeader(true);
			}

			setPrevScrollPosition(currentPosition);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollPosition, scrollPosition, showHeader]);

	return (
		<Card
			color={'black'}
			className={cn(className, styles.header, {
				[styles.hidden]: !showHeader,
				[styles.showed]: showHeader,
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
						<Image src={'/vk.svg'} alt={'vk logo'} width={30} height={30} />
					</Link>
					<Link href={TG_PATH} className={styles['header__contacts-link']}>
						<Image src={'/tg.svg'} alt={'vk logo'} width={30} height={30} />
					</Link>
					<Link href={YT_PATH} className={styles['header__contacts-link']}>
						<Image src={'/yt.svg'} alt={'vk logo'} width={30} height={30} />
					</Link>
					<AuthButton />
					<ShoppingCartModal />
				</div>
			</header>
		</Card>
	);
};
