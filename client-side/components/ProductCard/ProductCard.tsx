import React, { useState } from 'react';
import { IProductCardInterface } from './ProductCard.props';
import { Card } from '../Card/Card';
import styles from './ProductCard.module.scss';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { HTag, Modal } from '../';
import { ErrorPage, ProductPage } from '../../page-components';
import { API_PATH_IMAGE } from '../../api/helper.api';
import { priceRu } from '../../helpers';
import CartIcon from '../../public/cart.svg';

export const ProductCard = ({ product }: IProductCardInterface) => {
	const [modal, setModal] = useState<boolean>(false);

	if (!product) {
		return <ErrorPage type={'404'} />;
	}

	const { images, title, count, price } = product;

	const img = images
		? images[0].path
			? images[0].path.replace('/uploads', '')
			: 'Not Found'
		: 'Not Found';

	return (
		<div>
			<Card
				onClick={() => setModal(!modal)}
				color={'black'}
				className={styles['product-card']}
			>
				<div className={styles['product-card__image']}>
					<Image src={API_PATH_IMAGE + img} alt='CatalogPage' width={200} height={200} />
				</div>
				<HTag tag={'h2'}>{title}</HTag>
				<div className={styles['product-details']}>
					{count ? <span>Доступно: {count}</span> : <span>Нет в наличии</span>}
					<span>Цена: {priceRu(price)}</span>
				</div>
				<Button arrow={'none'} appearance={'primary'}>
					<Image src={'/cart.svg'} alt={'cart'} width={30} height={30} />
				</Button>
			</Card>
			<ProductPage modal={modal} setModal={setModal} product={product} />
		</div>
	);
};
