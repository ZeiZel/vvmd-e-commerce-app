import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useGetProductsQuery } from '../../store/product/product.api';
import { catalogPageData } from '../../helpers';
import { Card, HTag, Spinner } from '../../components';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import Head from 'next/head';
import { IProduct } from '../../store/product/product.interface';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import Error500 from '../../pages/500';
import styles from './ProductsList.module.scss';

export const ProductsList = () => {
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(20);

	const router = useRouter();
	const { alias } = router.query;

	const {
		data: products,
		isLoading,
		isError,
	} = useGetProductsQuery({
		category: alias as string,
		limit,
		page,
	});

	// произвести сравнение
	const category = catalogPageData[Number(alias)];

	if (isLoading) {
		return <Spinner />;
	}

	if (isError) {
		return <ErrorPage type={'404'} />;
	}

	if (category && products) {
		return (
			<div className={styles['products-list']}>
				<Head>
					<title>{category.title}</title>
				</Head>
				<div className={styles.container}>
					<div className={styles['products-list__wrapper']}>
						<Card className={styles['products-list__filters']}>
							<HTag tag={'h2'}>Фильтры</HTag>
						</Card>
						<Card color={'black'} className={styles['products-list__cards']}>
							<HTag tag={'h1'}>{category.title}</HTag>
							<div className={styles['products-list__items']}>
								{products.length > 0 ? (
									products.map((product: IProduct) => (
										<ProductCard
											key={product._id}
											product={product}
											useModal={true}
										/>
									))
								) : (
									<HTag tag={'h1'}>Товаров данной категории нет</HTag>
								)}
							</div>
						</Card>
					</div>
				</div>
			</div>
		);
	}

	return <Error500 />;
};
