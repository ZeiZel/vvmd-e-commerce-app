import React from 'react';
import { Card } from '../Card/Card';
import Image from 'next/image';
import { ICategoryCardProps } from './CategoryCard.props';
import styles from './CategoryCard.module.scss';

export const CategoryCard = ({ image, alt, title, count }: ICategoryCardProps) => {
	return (
		<Card className={styles.categoryCard}>
			<div className={styles.categoryCard__image}>
				<Image className={styles.image} src={image} alt={alt} />
			</div>
			<div className={styles.categoryCard__title}>{title}</div>
			<div className={styles.categoryCard__count}>{count}</div>
		</Card>
	);
};
