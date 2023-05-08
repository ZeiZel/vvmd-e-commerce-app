import React from 'react';
import { withLayout } from '../../layout/Layout';
import { ProductsList } from '../../page-components';

const Products = () => {
	return <ProductsList />;
};

export default withLayout(Products);
