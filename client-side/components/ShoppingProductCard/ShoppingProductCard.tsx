import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './ShoppingProductCard.module.scss';
import { IShoppingProductCardProps } from './ShoppingProductCard.props';
import { Divider } from '../UI/Divider/Divider';
import { API_PATH } from '../../api/helper.api';
import { IProductImage } from '../../interfaces/Product.interface';
import { HTag } from '../UI/HTag/HTag';
import { ErrorPage } from '../../page-components';
import { priceRu } from '../../helpers';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import DeleteIcon from './close.svg';
import {
	useDeleteOneProductMutation,
	useUpdateCountMutation,
	useUpdateTotalPriceMutation,
} from '../../store/shoppingcart/shoppingcart.api';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const ShoppingProductCard = ({ product, countTotalPrice }: IShoppingProductCardProps) => {
	const { images, productId, price, totalPrice, title, count, countToBuy } = product;
	const [countToBuyValue, setCountToBuyValue] = useState<number>(countToBuy);
	const [totalPriceValue, setTotalPriceValue] = useState<number>(totalPrice);

	const imagesArray: IProductImage[] = images.map((image) => ({
		...image,
		path: API_PATH.replace('/api/', '') + image.path.replace('/uploads', ''),
	}));

	const [token] = useLocalStorage('token', '');
	const [fetchDeleteOneProduct] = useDeleteOneProductMutation();
	const [fetchUpdateCount] = useUpdateCountMutation();
	const [fetchUpdateTotalPrice] = useUpdateTotalPriceMutation();

	useEffect(() => {
		setTotalPriceValue(countToBuyValue * price);
		countTotalPrice(totalPriceValue);
	}, [countToBuyValue]);

	const updateTotalPrice = async (totalPrice: number) => {
		await fetchUpdateTotalPrice({ token, productId, totalPrice }).unwrap();
	};

	const handleUpdateCount = async (event: Event, countToUpdate: number) => {
		event.stopPropagation();

		// позволяет выбрать товаров на количество от 0 до общего количества товаров на складе
		setCountToBuyValue((countToBuyValue) =>
			countToUpdate > 0
				? countToBuyValue < count
					? countToBuyValue + 1
					: countToBuyValue
				: countToBuyValue > 0
				? countToBuyValue - 1
				: countToBuyValue,
		);

		await updateTotalPrice(totalPriceValue);

		await fetchUpdateCount({ token, count: countToBuyValue, productId }).unwrap();
	};

	const handleDelete = async (event: Event) => {
		event.stopPropagation();

		await fetchDeleteOneProduct({ productId, token }).unwrap();
	};

	return (
		<div className={styles.product}>
			<div className={styles['product__wrapper']}>
				<Button
					arrow={'none'}
					appearance={'primary'}
					className={styles.product__delete}
					onClick={handleDelete}
				>
					<DeleteIcon />
				</Button>
				<span className={styles.product__image}>
					<Image
						src={imagesArray[0].path.replace('/uploads', '')}
						alt={title}
						width={100}
						height={100}
					/>
				</span>
				<div>
					<span className={styles.product__title}>
						<HTag tag={'h2'}>{title}</HTag>
					</span>
					<div>
						<span className={styles['product__count-to-buy']}>
							Общее количество: {count}
						</span>
						<span className={styles.product__price}>Цена: {priceRu(price)}</span>
					</div>
				</div>
				<span className={styles.product__count}>
					Количество:
					<Button
						arrow={'none'}
						appearance={'primary'}
						onClick={(e) => handleUpdateCount(e, 0)}
					>
						-
					</Button>
					<Input placeholder={'0...'} value={countToBuyValue} />
					<Button
						arrow={'none'}
						appearance={'primary'}
						onClick={(e) => handleUpdateCount(e, 1)}
					>
						+
					</Button>
				</span>
				<span className={styles['product__total-price']}>
					К общей стоимости: {totalPriceValue}
				</span>
			</div>

			<Divider />
		</div>
	);
};
