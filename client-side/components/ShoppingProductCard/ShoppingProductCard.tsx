import React from 'react';
import Image from 'next/image';
import styles from './ShoppingProductCard.module.scss';
import { IShoppingProductCardProps } from './ShoppingProductCard.props';
import { Divider } from '../Divider/Divider';
import { API_PATH } from '../../api/helper.api';
import { IProductImage } from '../../interfaces/Product.interface';
import { HTag } from '../HTag/HTag';
import { ErrorPage } from '../../page-components';

export const ShoppingProductCard = ({ product }: IShoppingProductCardProps) => {
	const { images, productId, price, totalPrice, title, count, countToBuy } = product;

	if (!images) return <ErrorPage type={'500'} />;

	const imagesArray: IProductImage[] = images.map((image) => ({
		...image,
		path: API_PATH.replace('/api/', '') + image.path.replace('/uploads', ''),
	}));

	return (
		<div className={styles.product}>
			<div className={styles.product__image}>
				<Image
					src={imagesArray[0].path.replace('/uploads', '')}
					alt={title}
					width={100}
					height={100}
				/>
			</div>
			<span className={styles.product__title}>
				<HTag tag={'h2'}>{title}</HTag>
			</span>
			<span className={styles['product__count-to-buy']}>{countToBuy}</span>
			<span className={styles.product__price}>{price}</span>
			<span className={styles.product__count}>{count}</span>
			<span className={styles['product__total-price']}>{totalPrice}</span>
			<Divider />
		</div>
	);
};
