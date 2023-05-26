import React, { useState } from 'react';
import styles from './ProductCard.module.scss';
import { IProductCardInterface } from './ProductCard.props';
import { Card } from '../UI/Card/Card';
import Image from 'next/image';
import { Button } from '../UI/Button/Button';
import { ContactForm, HTag, Modal } from '../';
import { ProductPage } from '../../page-components';
import { API_PATH_IMAGE } from '../../api/helper.api';
import { priceRu } from '../../helpers';
import {
	useAddProductToCartMutation,
	useGetAllProductsInCartQuery,
} from '../../store/shoppingcart/shoppingcart.api';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { notify } from '../../helpers/tostify';
import cn from 'classnames';
import { IShoppingCartProduct } from '../../store/shoppingcart/shoppingcart.interface';
import { useRouter } from 'next/router';

export const ProductCard = ({ product, useModal }: IProductCardInterface) => {
	const router = useRouter();

	const [modal, setModal] = useState<boolean>(false);
	const [openContacts, setOpenContacts] = useState<boolean>(false);
	const [token] = useLocalStorage('token', '');
	const [userId] = useLocalStorage('user-id', '');

	const { data: productsFromCart } = useGetAllProductsInCartQuery({ userId, token });
	const [fetchProduct, { isError, isLoading, isSuccess, status }] = useAddProductToCartMutation();
	const [login, updateLogin, removeLogin] = useLocalStorage('user', '');

	const addToProductCart = async (event: Event) => {
		event.stopPropagation();

		if (product.count === 0) {
			setOpenContacts(true);
			return;
		}

		const sameProduct =
			productsFromCart &&
			productsFromCart.find((p: IShoppingCartProduct) => {
				return p.productId === product._id;
			});

		if (!sameProduct) {
			const response = await fetchProduct({
				cartProduct: {
					login,
					productId: product._id,
				},
				token,
			})
				.unwrap()
				.then(() => {
					notify('success', 'Товар успешно добавлен в корзину!');
				})
				.catch(() => {
					notify(
						'error',
						'Пожалуйста, авторизуйтесь перед добавлением товара в корзину.',
					);
				});

			router.reload();
		}
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
				<div className={styles['product-card__content']}>
					<div className={styles['product-card__image']}>
						<Image
							src={API_PATH_IMAGE + img}
							alt='CatalogPage'
							width={200}
							height={200}
						/>
					</div>

					<HTag tag={'h3'} className={styles['product-card__title']}>
						{title}
					</HTag>

					<div className={styles['product-details']}>
						{count ? (
							<span className={styles['product-details__stock']}>
								Доступно: {count}
							</span>
						) : (
							<span className={styles['product-details__empty']}>Под заказ</span>
						)}
						<span>Цена: {priceRu(price)}</span>
					</div>
				</div>

				{useModal && (
					<Button
						arrow={'none'}
						appearance={'primary'}
						onClick={addToProductCart}
						className={cn({
							[styles.openContacts]: openContacts,
						})}
					>
						<Image src={'/cart.svg'} alt={'cart'} width={30} height={30} />
					</Button>
				)}
			</Card>

			{useModal && (
				<ProductPage
					modal={modal}
					setModal={setModal}
					product={product}
					addToProductCart={addToProductCart}
				/>
			)}

			{useModal && openContacts && (
				<Modal active={openContacts} setActive={setOpenContacts}>
					<div className={styles.container}>
						<ContactForm />
					</div>
				</Modal>
			)}
		</div>
	);
};
