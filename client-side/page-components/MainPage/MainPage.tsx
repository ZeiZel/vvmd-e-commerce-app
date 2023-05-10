import React from 'react';
import { ProductTabsSection } from './ProductTabsSection/ProductTabsSection';
import { BannerSection } from './BannerSection/BannerSection';
import { AdvantagesSection } from './AdvantagesSection/AdantagesSection';
import { ContactSection } from './ContactSection/ContactSection';

export const MainPage = () => {
	return (
		<main>
			<BannerSection />
			<AdvantagesSection />
			<ProductTabsSection />
			<ContactSection />
		</main>
	);
};
