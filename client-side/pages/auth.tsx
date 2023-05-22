import React from 'react';
import { AuthPage } from '../page-components';
import { withLayout } from '../layout/Layout';
import Head from 'next/head';

const Auth = () => {
	return (
		<div>
			<Head>
				<title>Вход</title>
			</Head>
			<AuthPage />
		</div>
	);
};

export default withLayout(Auth);
