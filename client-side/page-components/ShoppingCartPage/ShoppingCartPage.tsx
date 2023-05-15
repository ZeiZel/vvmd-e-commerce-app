import React from 'react';
import styles from './ShoppingCartPage.module.scss';
import { Card, ShoppingProductCard, Spinner } from '../../components';
import { useGetAllProductsInCartQuery } from '../../store/shoppingcart/shoppingcart.api';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { IAuthLoginResponse } from '../../interfaces/Auth.interface';
import { IShoppingCartProduct } from '../../store/shoppingcart/shoppingcart.interface';
import { useRouter } from 'next/router';

export const ShoppingCartPage = () => {
	const router = useRouter();
	const userId = router.query.userId;

	const {
		data: products,
		isLoading,
		isError,
	} = useGetAllProductsInCartQuery({
		userId,
		token: localStorage.getItem('token'),
	});

	console.log(isError);

	return (
		<div>
			<Card color={'black'}>
				{products &&
					products.map((product: IShoppingCartProduct) => (
						<ShoppingProductCard key={product.productId} product={product} />
					))}
			</Card>
		</div>
	);
};
