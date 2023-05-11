import React from 'react';
import styles from './MainPage.module.scss';
import { ProductTabsSection } from './ProductTabsSection/ProductTabsSection';
import { BannerSection } from './BannerSection/BannerSection';
import { AdvantagesSection } from './AdvantagesSection/AdantagesSection';
import { ContactSection } from './ContactSection/ContactSection';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export const MainPage = () => {
	return (
		<div className={styles.wrapper}>
			<Parallax pages={4} className={styles.wrapper__parallax}>
				<ParallaxLayer offset={0}>
					<BannerSection />
				</ParallaxLayer>

				<ParallaxLayer offset={1}>
					<AdvantagesSection />
				</ParallaxLayer>

				<ParallaxLayer offset={2}>
					<ProductTabsSection />
				</ParallaxLayer>

				<ParallaxLayer offset={3}>
					<ContactSection />
				</ParallaxLayer>
			</Parallax>
		</div>
	);
};
