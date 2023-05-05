import React from 'react';
import { catalogPageData } from '../../helpers';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import styles from './CatalogPage.module.scss';

export const CatalogPage = () => {
	return (
		<div className={styles.wrapper}>
			{catalogPageData.map((item) => (
				<CategoryCard
					key={item.category}
					category={item.category}
					title={item.title}
					image={item.image}
				/>
			))}
		</div>
	);
};
