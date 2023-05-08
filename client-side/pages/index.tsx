import {
	Button,
	ButtonIcon,
	Card,
	Divider,
	HTag,
	Modal,
	Paragraph,
	Rating,
	Tag,
	ThemeToggle,
	Up,
} from '../components';
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { withLayout } from '../layout/Layout';
import { AuthForm } from '../components';
import { clearToken } from '../store/localStorage/localStorageSlice';
import { useAppDispatch } from '../store';
import { ProductCard } from '../components/ProductCard/ProductCard';

export function Home() {
	const [rating, setRating] = useState<number>(1);

	const [modal, setModal] = useState<boolean>(false);

	const dispatch = useAppDispatch();

	return (
		<>
			<Head>
				<title>Волго-Вятский Монетный Двор главная</title>
				<meta
					name={'description'}
					content={
						'Волго-Вятский Монетный Двор уже более 50 лет занимается производством медалей для вас'
					}
				/>
			</Head>
			<Up />
			<h1>Кнопки</h1>
			<Button arrow={'none'} appearance={'primary'}>
				<Link href={'/privateRoute'}>приватка</Link>
			</Button>
			<Button onClick={() => dispatch(clearToken())} arrow={'none'} appearance={'primary'}>
				убрать приватку
			</Button>
			<Button arrow={'right'} appearance={'primary'}>
				Текст
			</Button>
			<Button arrow={'down'} appearance={'ghost'}>
				Текст
			</Button>
			<Button arrow={'none'} appearance={'primary'}>
				Текст
			</Button>
			<Divider />

			<ThemeToggle />
			<Divider />

			<Modal active={modal} setActive={setModal}>
				<AuthForm />
			</Modal>
			<Button onClick={() => setModal(!modal)} arrow={'none'} appearance={'primary'}>
				Авторизация
			</Button>
			<Divider />

			<h1>Иконочные кнопки</h1>
			<ButtonIcon icon={'up'} appearance={'primary'} />
			<ButtonIcon icon={'menu'} appearance={'black'} />
			<ButtonIcon icon={'close'} appearance={'primary'} />
			<Divider />

			<h1>Роутер</h1>
			<div>
				<Link href={'/'}>Главная</Link>
				<Link href={'/category'}>Категории</Link>
				<Link href={'/member'}>Мембер</Link>
			</div>
			<Divider />

			<h1>Теги</h1>
			<HTag tag={'h1'}>h1</HTag>
			<HTag tag={'h2'}>h2</HTag>
			<HTag tag={'h3'}>h3</HTag>
			<Divider />

			<h1>Строки</h1>
			<Paragraph size={'l'}>БОЛЬШОЙ ТЕКСТ: очень много текста</Paragraph>
			<Paragraph size={'m'}>СРЕДНИЙ ТЕКСТ: очень много текста</Paragraph>
			<Paragraph size={'s'}>МАЛЕНЬКИЙ ТЕКСТ: очень много текста</Paragraph>
			<Divider />

			<h1>Теги</h1>
			<Tag size={'s'} color={'green'}>
				1000 рублей
			</Tag>
			<Tag size={'m'} color={'primary'}>
				1000 рублей
			</Tag>
			<Tag size={'s'} color={'red'}>
				1000 рублей
			</Tag>
			<Tag size={'m'} color={'ghost'}>
				1000 рублей
			</Tag>
			<Tag size={'s'} color={'gray'}>
				1000 рублей
			</Tag>
			<Divider />

			<h1>Карточка</h1>
			<Card color={'green'}>Сколько-то текста в карточке</Card>
			<Card color={'red'}>Сколько-то текста в карточке</Card>
			<Card color={'blue'}>Сколько-то текста в карточке</Card>
			<Card color={'black'}>Сколько-то текста в карточке</Card>
		</>
	);
}

export default withLayout(Home);
