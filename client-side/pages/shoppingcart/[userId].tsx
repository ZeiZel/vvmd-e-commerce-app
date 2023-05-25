import React from 'react';
import withAuth from '../../utils/withAuth';
import { withLayout } from '../../layout/Layout';
import { ShoppingCartPage } from '../../page-components';
import Head from 'next/head';

const ShoppingCart = () => {
	return (
		<div>
			<Head>
				<title>Корзина</title>
			</Head>
			<ShoppingCartPage />
		</div>
	);
};

export default withAuth(withLayout(ShoppingCart));
