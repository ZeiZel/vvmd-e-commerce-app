import React from 'react';
import Head from 'next/head';
import { MainPage } from '../page-components';
import { withLayout } from '../layout/Layout';

export function Home() {
	return (
		<div>
			<Head>
				<title>Волго-Вятский Монетный Двор главная</title>
				<meta
					name={'description'}
					content={
						'Волго-Вятский Монетный Двор уже более 50 лет занимается производством медалей для вас'
					}
				/>
			</Head>
			<MainPage />
		</div>
	);
}

export default withLayout(Home);
