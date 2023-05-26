import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useGetProductsQuery } from '../../store/product/product.api';
import { catalogPageData } from '../../helpers';
import { Button, Card, HTag, Spinner } from '../../components';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import Head from 'next/head';
import { IProduct } from '../../store/product/product.interface';
import { ProductCard } from '../../components';
import styles from './ProductsList.module.scss';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { notify } from '../../helpers/tostify';

export const ProductsList = () => {
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(20);

	const router = useRouter();
	const { alias } = router.query;

	const {
		data: products,
		isLoading,
		isError,
	} = useGetProductsQuery({
		category: alias as string,
		limit,
		page,
	});

	const [minPrice, setMinPrice] = useState<number>(0);
	const [maxPrice, setMaxPrice] = useState(10000);
	const [inStock, setInStock] = useState<boolean>(false);
	const [filteredProducts, setFilteredProducts] = useState(products);

	const setMaxPriceValue = () => {
		if (products) {
			let max = 0;
			for (let i = 0; i < products.length; i++) {
				if (products[i].price > max) {
					max = products[i].price;
				}
			}
			return max;
		}
		return 0;
	};

	const setMinPriceValue = () => {
		if (products) {
			let min = Infinity;
			for (let i = 0; i < products.length; i++) {
				if (products[i].price < min) {
					min = products[i].price;
				}
			}
			return min;
		}
		return 0;
	};

	const generateProducts = () =>
		category && filteredProducts && filteredProducts.length > 0 ? (
			filteredProducts.map((product: IProduct) => (
				<ProductCard key={product._id} product={product} useModal={true} />
			))
		) : (
			<HTag tag={'h1'}>Товары не найдены</HTag>
		);

	const handleFilter = () => {
		const filteredProducts =
			category &&
			products &&
			products.filter((product) => {
				return (
					!(product.price < minPrice || product.price > maxPrice) &&
					(inStock ? product.count > 0 : true)
				);
			});
		setFilteredProducts(filteredProducts);
	};

	useEffect(() => {
		setMaxPrice(setMaxPriceValue());
		setMinPrice(setMinPriceValue());
	}, [products]);

	useEffect(() => {
		handleFilter();
	}, [minPrice, maxPrice, inStock]);

	// произвести сравнение
	const category = catalogPageData[Number(alias)];

	if (isLoading) {
		return <Spinner />;
	}

	if (isError) {
		return <ErrorPage type={'404'} />;
	}

	return (
		<div className={styles['products-list']}>
			<Head>
				<title>{category.title}</title>
			</Head>
			<div className={styles.container}>
				<div className={styles['products-list__wrapper']}>
					<Card className={styles['products-list__filters']}>
						<HTag tag={'h2'}>Фильтры</HTag>
						<InputRange
							minValue={0}
							maxValue={5000}
							value={{ min: minPrice, max: maxPrice }}
							onChange={(value) => {
								setMinPrice(value.min);
								setMaxPrice(value.max);
							}}
							onChangeComplete={handleFilter}
						/>
						<label className={styles.label} htmlFor={'inStock'}>
							<input
								id={'inStock'}
								type='checkbox'
								checked={inStock}
								onChange={(e) => {
									setInStock(!inStock);
									handleFilter();
								}}
							/>
							{'  '}
							Только в наличии
						</label>
						<Button arrow={'none'} appearance={'primary'} onClick={handleFilter}>
							Применить
						</Button>
					</Card>
					<Card color={'black'} className={styles['products-list__cards']}>
						<HTag tag={'h1'}>{category.title}</HTag>
						<div className={styles['products-list__items']}>{generateProducts()}</div>
					</Card>
				</div>
			</div>
		</div>
	);
};
