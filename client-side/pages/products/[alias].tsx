import React, { useEffect } from 'react';
import { withLayout } from '../../layout/Layout';
import { useRouter } from 'next/router';
import { catalogPageData } from '../../helpers';
import { useGetProductsQuery } from '../../store/product/product.api';
import Error500 from '../500';
import { Card, Spinner } from '../../components';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { IProduct } from '../../store/product/product.interface';
import { ErrorPage } from '../../page-components';

const Products = () => {
	const router = useRouter();
	const { alias } = router.query;

	const {
		data: products,
		isLoading,
		isError,
	} = useGetProductsQuery({
		category: alias as string,
		limit: 20,
		page: 2,
	});

	useEffect(() => {
		console.log(products);
	}, [products]);

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
			<Card color={'black'}>
				{category.title}
				<div>
					{products.map((product: IProduct) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</Card>
		);
	}

	return <Error500 />;
};

export default withLayout(Products);
