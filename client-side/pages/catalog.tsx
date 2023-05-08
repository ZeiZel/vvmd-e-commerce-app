import React from 'react';
import Head from 'next/head';
import { withLayout } from '../layout/Layout';
import { CatalogPage } from '../page-components';

const Catalog = () => {
	return (
		<div>
			<Head>
				<title>Каталог</title>
			</Head>
			<CatalogPage />
		</div>
	);
};

export default withLayout(Catalog);
