import React from 'react';
import Image from 'next/image';
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
		<div>
			<Image
				src={API_PATH.replace('/api/', '') + imagesArray[0].path.replace('/uploads', '')}
				alt={title}
				width={100}
				height={100}
			/>
			<HTag tag={'h2'}>{title}</HTag>
			<span>{countToBuy}</span>
			<span>{price}</span>
			<span>{count}</span>
			<span>{totalPrice}</span>
			<Divider />
		</div>
	);
};
