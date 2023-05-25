import React, { useState } from 'react';
import { withLayout } from '../layout/Layout';
import Head from 'next/head';
import { AboutPage } from '../page-components';

const About = (): JSX.Element => {
	return (
		<div>
			<Head>
				<title>О компании</title>
			</Head>
			<AboutPage />
		</div>
	);
};

export default withLayout(About);
