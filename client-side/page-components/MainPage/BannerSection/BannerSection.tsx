import { useState, useEffect } from 'react';
import HeaderImage from '../../../public/medal-main-slider.png';
import BgImage from '../../../public/bg-main-slider.png';
import { Button, HTag, Paragraph } from '../../../components';
import Link from 'next/link';
import Image from 'next/image';
import styles from './BannerSection.module.scss';
import cn from 'classnames';

export const BannerSection = () => {
	return (
		<section className={styles.banner}>
			<div className={cn(styles.banner__wrapper)}>
				<div className={styles.container}>
					<div className={styles.banner__title}>
						<span>Танк ИС-42.</span>
						<HTag tag={'h1'}>
							Серия <span>CONFRONTATION</span>
						</HTag>
						<Paragraph>
							КОНФРОНТАЦИЯ – уникальный дизайн коллекционной серии монет с высоким
							рельефом.
						</Paragraph>
						<Button arrow={'right'} appearance={'primary'}>
							<Link href={'/'}>Смотреть подробнее</Link>
						</Button>
					</div>
					<div className={styles.banner__image}>
						<Image src={HeaderImage} alt={'medal'} width={500} height={500} />
					</div>
				</div>
			</div>
		</section>
	);
};
