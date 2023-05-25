import React from 'react';
import Head from 'next/head';
import { withLayout } from '../layout/Layout';
import { ContactsPage } from '../page-components';

const Contacts = () => {
	return (
		<div>
			<Head>
				<title>Контакты</title>
			</Head>
			<ContactsPage />
		</div>
	);
};

export default withLayout(Contacts);
