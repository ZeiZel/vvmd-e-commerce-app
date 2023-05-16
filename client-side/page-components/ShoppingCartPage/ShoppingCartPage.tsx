import React, { MouseEventHandler, useEffect, useState } from 'react';
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

export const ShoppingCartPage = () => {
	const router = useRouter();
	const userId = router.query.userId as string;

	const [disabled, setDisabled] = useState<boolean>(false);
	const [totalPrice, setTotalPrice] = useState<number>(0);

	const handleCountTotalPrice = (price: number) => {
		setTotalPrice(totalPrice + price);
	};

	const [token, updateToken, removeToken] = useLocalStorage('token', '');

	const {
		data: productsData,
		isLoading,
		isError,
	} = useGetAllProductsInCartQuery({
		userId,
		token,
	});

	const [products, setProducts] = useState(productsData);

	const [fetchDeleteAll, {}] = useDeleteAllProductsMutation();

	const handleDeleteAll: MouseEventHandler<HTMLButtonElement> = async (event: MouseEvent) => {
		event.stopPropagation();

		await fetchDeleteAll({ userId, token }).unwrap();
	};

	if (isLoading) return <Spinner />;

	if (isError) return <ErrorPage type={'500'} />;

	return (
		<div className={styles.cart}>
			<div className={styles['container']}>
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
						{products &&
							products.map((product: IShoppingCartProduct) => (
								<ShoppingProductCard
									key={product.productId}
									product={product}
									countTotalPrice={handleCountTotalPrice}
								/>
							))}
					</Card>
					<Card color={'black'} className={styles.cart__order}>
						<HTag tag={'h1'}>Оформление заказа</HTag>
						<HTag tag={'h2'}>Общая стоимость: {totalPrice}</HTag>
						<span>
							<label htmlFor='offer'>
								<input
									id={'offer'}
									type={'checkbox'}
									checked={disabled}
									onChange={() => setDisabled(!disabled)}
								/>
								Совершая заказ, вы подтверждаете согласие с{'  '}
								<Link href={'/'}>офертой</Link>
							</label>
						</span>
						<Button arrow={'none'} appearance={'primary'} disabled={!disabled}>
							Оформить заказ
						</Button>
					</Card>
				</div>
			</div>
		</div>
	);
};
