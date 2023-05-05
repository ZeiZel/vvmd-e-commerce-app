import React from 'react';
import { Card } from '../Card/Card';
import Image from 'next/image';
import { ICategoryCardProps } from './CategoryCard.props';
import styles from './CategoryCard.module.scss';
import Link from 'next/link';
import { API_FUNCTIONS, API_PATH, API_ROUTE } from '../../api/apiService';

export const CategoryCard = ({ image, title, category }: ICategoryCardProps) => {
	return (
		<Card className={styles.categoryCard}>
			<Link
				href={
					API_PATH +
					API_ROUTE.product +
					API_FUNCTIONS.product.findByCategoryWithPagination +
					'0?page=1&limit=20'
				}
			>
				<div className={styles.categoryCard__image}>
					<Image
						className={styles.image}
						src={image}
						alt={title}
						width={100}
						height={100}
					/>
				</div>
				<div className={styles.categoryCard__title}>{title}</div>
			</Link>
		</Card>
	);
};
