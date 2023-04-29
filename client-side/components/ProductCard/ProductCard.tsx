import React from 'react';
import { IProductCardInterface } from './ProductCard.props';
import { Card } from '../Card/Card';
import styles from './ProductCard.module.scss';
import Image from 'next/image';

export const ProductCard = ({ image }: IProductCardInterface): JSX.Element => {
	return (
		<Card>
			<Image src={image} alt='изображение каталога' />
		</Card>
	);
};
