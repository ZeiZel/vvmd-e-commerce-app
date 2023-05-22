import React from 'react';
import { Card } from '../UI/Card/Card';
import Image from 'next/image';
import { ICategoryCardProps } from './CategoryCard.props';
import styles from './CategoryCard.module.scss';
import Link from 'next/link';

export const CategoryCard = ({ image, title, category }: ICategoryCardProps) => {
	return (
		<Card className={styles.categoryCard}>
			<Link href={`/products/${category}`}>
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
