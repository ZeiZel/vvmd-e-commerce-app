import React, { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { withLayout } from '../../layout/Layout';
import { CatalogPage } from '../../page-components';
import { IProduct } from '../../interfaces/product.interface';
import ProductPage from '../../page-components/ProductPage/ProductPage';

interface ICatalogProps {
	products: IProduct[];
}

const CatalogPageList = ({ products }: ICatalogProps) => {
	return <ProductPage products={products} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch('http://example.com/products');
	const products = await res.json();
	return {
		props: {
			products,
		},
	};
};

export default withLayout(Catalog);
