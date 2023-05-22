import React from 'react';
import styles from './BuyPage.module.scss';
import { useGetAllProductsQuery } from '../../store/product/product.api';
import { Card, Divider, HTag, Spinner, ProductCard } from '../../components';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { IProduct } from '../../store/product/product.interface';

export const BuyPage = (): JSX.Element => {
	const { data: products, isError, isLoading } = useGetAllProductsQuery();

	if (isLoading) {
		return <Spinner />;
	}

	if (isError) {
		return <ErrorPage type={'500'} />;
	}

	return (
		<div className={styles['buy-page']}>
			<div className={styles.container}>
				<Card color={'black'} className={styles['buy-page__wrapper']}>
					<HTag tag={'h1'}>Все продукты компании</HTag>
					<Divider />
					<div className={styles['buy-page__items']}>
						{products.map((product: IProduct) => (
							<ProductCard key={product._id} product={product} useModal={true} />
						))}
					</div>
				</Card>
			</div>
		</div>
	);
};
