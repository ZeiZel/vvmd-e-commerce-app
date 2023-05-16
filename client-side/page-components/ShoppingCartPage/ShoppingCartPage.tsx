import React, { useState } from 'react';
import styles from './ShoppingCartPage.module.scss';
import { Button, Card, HTag, ShoppingProductCard, Spinner } from '../../components';
import { useGetAllProductsInCartQuery } from '../../store/shoppingcart/shoppingcart.api';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { IShoppingCartProduct } from '../../store/shoppingcart/shoppingcart.interface';
import { useRouter } from 'next/router';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import Link from 'next/link';

export const ShoppingCartPage = () => {
	const router = useRouter();
	const userId = router.query.userId;

	const [disabled, setDisabled] = useState<boolean>(false);

	const [token, updateToken, removeToken] = useLocalStorage('token', '');

	const {
		data: products,
		isLoading,
		isError,
	} = useGetAllProductsInCartQuery({
		userId,
		token: token,
	});

	if (isLoading) return <Spinner />;

	if (isError) return <ErrorPage type={'500'} />;

	return (
		<div className={styles.cart}>
			<div className={styles['container']}>
				<div className={styles.cart__wrapper}>
					<Card color={'black'} className={styles.cart__products}>
						{products &&
							products.map((product: IShoppingCartProduct) => (
								<ShoppingProductCard key={product.productId} product={product} />
							))}
					</Card>
					<Card color={'black'} className={styles.cart__order}>
						<HTag tag={'h1'}>Оформление заказа</HTag>
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
