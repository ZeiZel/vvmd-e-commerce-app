import React, { FC } from 'react';
import { IFooterProps } from './Footer.props';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { Button, Card, Divider } from '../../components';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer: FC<IFooterProps> = ({ className, ...props }: IFooterProps): JSX.Element => {
	return (
		<Card className={cn(styles.footer, className)} {...props}>
			<footer className={styles.footer__wrapper}>
				<div className={styles['footer__group']}>
					<div className={styles['footer__left']}>
						<nav className={styles['footer__nav']}>
							<ul>
								<li>
									<Link href={'/catalog'}>Каталог</Link>
								</li>
								<li>
									<Link href={'/catalog'}>Компания</Link>
								</li>
								<li>
									<Link href={'/catalog'}>Информация</Link>
								</li>
								<li>
									<Link href={'/catalog'}>Помощь</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className={styles['footer__right']}>
						<Button
							className={styles['footer__subscribe-button']}
							appearance={'ghost'}
							arrow={'right'}
						>
							<Link href={'https://t.me/VVMDmint'}>Подписаться на нашу рассылку</Link>
						</Button>
					</div>
				</div>

				<Divider className={styles['footer__divider']} />
				<div className={styles['footer__license']}>
					<p>{format(new Date(), 'yyyy')} © «Волго-Вятский монетный двор», ООО</p>
					<br />
					<Link href={'/'}>Пользовательское соглашение</Link>
					<Link href={'/'}>Политика конфиденциальности</Link>
				</div>
			</footer>
		</Card>
	);
};
