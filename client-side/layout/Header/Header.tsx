import React, { FC } from 'react';
import { IHeaderProps } from './Header.props';
import cn from 'classnames';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import LogoIcon from '../logo.png';
import AccLogoIcon from './acclogo.png';
import { LoginStatus } from '../../components';

export const Header: FC<IHeaderProps> = ({ className, ...props }: IHeaderProps): JSX.Element => {
	return (
		<header className={cn(styles.header, className)} {...props}>
			<Link className={styles['header__logo']} href={'/'}>
				<Image src={LogoIcon} alt={'логотип'} width={200} height={100} />
			</Link>
			<nav className={styles['header__nav']}>
				<ul>
					<li>
						<Link href={'/catalog'}>Каталог</Link>
					</li>
					<li>
						<Link href={'/buy'}>Купить</Link>
					</li>
					<li>
						<Link href={'/about'}>О компании</Link>
					</li>
					<li>
						<Link href={'/contacts'}>Контакты</Link>
					</li>
				</ul>
				<LoginStatus login={'Alexey'} image={AccLogoIcon} />
			</nav>
		</header>
	);
};
