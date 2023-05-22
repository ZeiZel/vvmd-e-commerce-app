import React, { useState } from 'react';
import styles from './ShoppingCartModal.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import { IShoppingCartProps, IShoppingCartModalProps } from './ShoppingCartModal.props';
import { Button } from '../UI/Button/Button';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useGetAllProductsInCartQuery } from '../../store/shoppingcart/shoppingcart.api';
import { HTag } from '../UI/HTag/HTag';
import { API_PATH } from '../../api/helper.api';
import { IProductImage } from '../../interfaces/Product.interface';
import { IShoppingCartProduct } from '../../store/shoppingcart/shoppingcart.interface';
import { Spinner } from '../UI/Spinner/Spinner';
import { Card } from '../UI/Card/Card';
import CartIcon from './cart.svg';

export const ShoppingCartModal = ({ className }: IShoppingCartProps): JSX.Element => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [userId] = useLocalStorage('user-id', '');

	return (
		<>
			{userId && (
				<div className={styles.button}>
					<Button
						arrow={'none'}
						appearance={'primary'}
						onClick={() => setShowModal(!showModal)}
					>
						<CartIcon />
					</Button>
				</div>
			)}
			{showModal && <Modal userId={userId} />}
		</>
	);
};

const Modal = ({ userId, className }: IShoppingCartModalProps): JSX.Element => {
	const [token, updateToken, removeToken] = useLocalStorage('token', '');

	const {
		data: productsData,
		isLoading,
		isError,
	} = useGetAllProductsInCartQuery({
		userId,
		token,
	});

	// оставляем одно изображение в массиве
	const products =
		productsData &&
		productsData.map((product: IShoppingCartProduct) => ({
			...product,
			images: product.images.slice(0, 1),
		}));

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<Card className={cn(styles.cart, className)}>
			<Card color={'black'} className={cn(styles.cart__wrapper)}>
				{products ? (
					products.map((product: IShoppingCartProduct) => (
						<div key={product.productId} className={cn(styles.cart__product)}>
							<div className={styles.product__image}>
								{product.images.map((image: IProductImage, i, images) => (
									<Image
										key={image.name}
										src={
											API_PATH.replace('/api/', '') +
											image.path.replace('/uploads', '')
										}
										alt={image.name}
										width={100}
										height={100}
									/>
								))}
							</div>
						</div>
					))
				) : (
					<HTag tag={'h2'}>Товаров в корзине нет</HTag>
				)}
			</Card>
			<Button arrow={'none'} appearance={'ghost'}>
				<Link href={`/shoppingcart/${userId}`}>Корзина</Link>
			</Button>
		</Card>
	);
};
