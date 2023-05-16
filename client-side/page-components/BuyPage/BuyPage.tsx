import React from 'react';
import styles from './BuyPage.module.scss';
import { useGetAllProductsQuery } from '../../store/product/product.api';
import { Card, Divider, HTag, Spinner } from '../../components';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { IProduct } from '../../store/product/product.interface';
import { ProductCard } from '../../components/ProductCard/ProductCard';

export const BuyPage = () => {
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
					{products.map((product: IProduct) => (
						<ProductCard key={product._id} product={product} useModal={true} />
					))}
				</Card>
			</div>
		</div>
	);
};
