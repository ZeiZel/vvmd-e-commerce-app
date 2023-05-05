import React from 'react';
import { IProductCardInterface } from './ProductCard.props';
import { Card } from '../Card/Card';
import styles from './ProductCard.module.scss';
import Image from 'next/image';
import { Button } from '../Button/Button';
import Link from 'next/link';
import { HTag, Rating } from '../';

export const ProductCard = ({
	image,
	title,
	rating,
	availableQty,
	price,
	id,
}: IProductCardInterface) => {
	return (
		<Card color={'black'} className={styles['product-card']}>
			<div className={styles['product-card__image']}>
				<Image src={image} alt='CatalogPage' width={200} height={200} />
			</div>
			<HTag tag={'h2'}>{title}</HTag>
			<Rating rating={rating} isEditable={false} />
			<div className='product-details'>
				{availableQty ? <p>Available: {availableQty}</p> : <p>Под заказ</p>}
				{price ? (
					<p>Price: ${price}</p>
				) : (
					<Button arrow={'none'} appearance={'ghost'}>
						<Link href={`/products/${id}`}>Оформить заказ</Link>
					</Button>
				)}
			</div>
		</Card>
	);
};
