import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './AdvantagesSection.module.scss';
import { Card, HTag, Paragraph, Spinner } from '../../../components';
import { useGetProductsQuery } from '../../../store/product/product.api';
import { IProduct } from '../../../store/product/product.interface';
import { ProductCard } from '../../../components/ProductCard/ProductCard';
import { responsiveOptions } from '../../../helpers';
import { ErrorPage } from '../../ErrorPage/ErrorPage';
import cn from 'classnames';
import Image from 'next/image';

export const AdvantagesSection = () => {
	const {
		data: products,
		isLoading,
		isError,
	} = useGetProductsQuery({
		category: '0',
		limit: 20,
		page: 1,
	});

	console.log(products);

	let answer;

	if (isError) {
		answer = <ErrorPage type={'500'} />;
	}

	if (isLoading) {
		answer = <Spinner />;
	}

	return (
		<section className={styles.products}>
			<div className={styles.container}>
				<Card color={'black'} className={cn(styles['products__wrapper'])}>
					<HTag tag={'h2'}>Монеты и медали монетного типа</HTag>
					<Paragraph>
						Волго-Вятский монетный двор – первый частный монетный двор в России. Мы
						чеканим монету, создаём ордена, медали, мемориальные медали, на которых
						запечатлены важные для страны, компаний, людей события. Мы создаем
						удивительные высокохудожественные произведения, комбинируя драгоценные
						камни, сплавы драгоценных металлов, эмали, технику гильоше.
					</Paragraph>
					<Carousel
						responsive={responsiveOptions}
						infinite={true}
						autoPlay={true}
						className={cn(styles['products__slider'])}
					>
						{answer && answer}
						{products && products.length > 0 ? (
							products.map((product: IProduct) => (
								<div key={product._id} className={styles.item}>
									<ProductCard product={product} useModal={false} />
								</div>
							))
						) : (
							<HTag tag={'h1'}>Товаров данной категории нет</HTag>
						)}
					</Carousel>
				</Card>
			</div>
		</section>
	);
};
