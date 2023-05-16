import React, { useState } from 'react';
import { IProductCardInterface } from './ProductCard.props';
import { Card } from '../Card/Card';
import styles from './ProductCard.module.scss';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { HTag, Modal, Spinner } from '../';
import { ErrorPage, ProductPage } from '../../page-components';
import { API_PATH_IMAGE } from '../../api/helper.api';
import { priceRu } from '../../helpers';
import { useAddProductToCartMutation } from '../../store/shoppingcart/shoppingcart.api';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const ProductCard = ({ product, useModal }: IProductCardInterface) => {
	const [modal, setModal] = useState<boolean>(false);

	if (!product) {
		return <ErrorPage type={'404'} />;
	}

	const [fetchProduct, { isError, isLoading }] = useAddProductToCartMutation();
	const [login, updateLogin, removeLogin] = useLocalStorage('user', '');
	const [token] = useLocalStorage('token', '');

	const addToProductCart = (event: Event) => {
		event.stopPropagation();

		const response = fetchProduct({
			cartProduct: {
				login,
				productId: product._id,
			},
			token,
		}).unwrap();
	};

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
				<Button arrow={'none'} appearance={'primary'} onClick={addToProductCart}>
					{isLoading ? (
						<Spinner />
					) : (
						<Image src={'/cart.svg'} alt={'cart'} width={30} height={30} />
					)}
				</Button>
			</Card>
			{useModal && <ProductPage modal={modal} setModal={setModal} product={product} />}
		</div>
	);
};
