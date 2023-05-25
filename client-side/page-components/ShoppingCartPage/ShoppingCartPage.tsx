import React, { useState } from 'react';
import styles from './ShoppingCartPage.module.scss';
import { Button, Card, HTag, ShoppingProductCard, Spinner } from '../../components';
import {
	useDeleteAllProductsMutation,
	useGetAllProductsInCartQuery,
} from '../../store/shoppingcart/shoppingcart.api';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { IShoppingCartProduct } from '../../store/shoppingcart/shoppingcart.interface';
import { useRouter } from 'next/router';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import Link from 'next/link';
import Image from 'next/image';
import { notify } from '../../helpers/tostify';
import { useMakePaymentMutation } from '../../store/payment/payment.api';
import { useAppDispatch, useAppSelector } from '../../store';
import { setTotalPrice } from './ShoppingCartPageSlice';

export const ShoppingCartPage = () => {
	const router = useRouter();
	const userId = router.query.userId as string;

	const dispatch = useAppDispatch();

	const [token] = useLocalStorage('token', '');

	const [fetchDeleteAll, {}] = useDeleteAllProductsMutation();
	const [fetchPayment] = useMakePaymentMutation();

	const {
		data: productsData,
		isLoading,
		isError,
	} = useGetAllProductsInCartQuery({
		userId,
		token,
	});

	const totalPrice = useAppSelector((state) => state.shoppingCart.totalPrice);

	const handleTotalPrice = (price: number) => {
		dispatch(setTotalPrice(price));
	};

	const handlePayment = async () => {
		const response = await fetchPayment({ amount: totalPrice, token }).unwrap();

		if (response) {
			await router.push(response.confirmation.confirmation_url);
		}
	};

	const handleDeleteAll = async (event: MouseEvent) => {
		await fetchDeleteAll({ userId, token }).unwrap();

		notify('success', 'Все товары удалены из корзины');
	};

	if (isLoading) return <Spinner />;

	if (isError) return <ErrorPage type={'500'} />;

	return (
		<div className={styles.cart}>
			<div className={styles['container']}>
				<div className={styles.cart__wrapper}>
					{productsData && productsData.length > 0 ? (
						<div className={styles.cart__wrapper}>
							<Card color={'black'} className={styles.cart__products}>
								<Button
									arrow={'none'}
									appearance={'primary'}
									onClick={handleDeleteAll}
									className={styles.cart__delete}
								>
									Удалить всё
								</Button>
								{productsData &&
									productsData.map((product: IShoppingCartProduct) => (
										<ShoppingProductCard
											key={product.productId}
											product={product}
											handleTotalPrice={handleTotalPrice}
										/>
									))}
							</Card>
							<Card color={'black'} className={styles.cart__order}>
								<div className={styles['cart__order-price']}>
									<HTag tag={'h2'}>Итого:</HTag>
									<span>{totalPrice}</span>
								</div>
								<Button
									arrow={'none'}
									appearance={'primary'}
									onClick={handlePayment}
								>
									Оформить заказ
								</Button>
							</Card>
						</div>
					) : (
						<div className={styles.cart__empty}>
							<Image src={'/cart.svg'} alt={'cart'} width={100} height={100} />
							<HTag className={styles['cart__empty-tag']} tag={'h1'}>
								Корзина пуста
							</HTag>
							<Link href={'/catalog'}>перейти к покупкам</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
