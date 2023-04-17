import { Button, HTag } from '../components';
import React from 'react';
import Head from 'next/head';
import { Montserrat } from 'next/font/google';
import cn from 'classnames';
import Link from 'next/link';

const montserrat = Montserrat({
	subsets: ['cyrillic'],
	weight: '400',
});

export default function Page() {
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
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Button arrow={'right'} appearance={'primary'}>
				Текст
			</Button>
			<h1>Роутер</h1>
			<div>
				<Link href={'/'}>Главная</Link>
				<Link href={'/category'}>Категории</Link>
				<Link href={'/member'}>Мембер</Link>
			</div>
			<h1>Теги</h1>
			<HTag tag={'h1'}>h1</HTag>
			<HTag tag={'h2'}>h2</HTag>
			<HTag tag={'h3'}>h3</HTag>
		</div>
	);
}
