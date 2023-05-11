import React from 'react';
import styles from './MainPage.module.scss';
import { BannerSection } from './BannerSection/BannerSection';
import { AdvantagesSection } from './AdvantagesSection/AdantagesSection';
import { ContactSection } from './ContactSection/ContactSection';

export const MainPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapper__parallax}>
				<BannerSection />
				<AdvantagesSection />
				<ContactSection />
			</div>
		</div>
	);
};
