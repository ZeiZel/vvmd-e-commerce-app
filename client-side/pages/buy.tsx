import React from 'react';
import { withLayout } from '../layout/Layout';
import { BuyPage } from '../page-components';
import Head from 'next/head';

const Buy = () => {
	return (
		<div>
			<Head>
				<title>Все товары</title>
			</Head>
			<BuyPage />
		</div>
	);
};

export default withLayout(Buy);
