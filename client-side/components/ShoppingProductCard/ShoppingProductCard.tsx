import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './ShoppingProductCard.module.scss';
import { IShoppingProductCardProps } from './ShoppingProductCard.props';
import { Divider } from '../UI/Divider/Divider';
import { API_PATH } from '../../api/helper.api';
import { IProductImage } from '../../interfaces/Product.interface';
import { HTag } from '../UI/HTag/HTag';
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
import { notify } from '../../helpers/tostify';
import {
	decrementTotalPrice,
	incrementTotalPrice,
} from '../../page-components/ShoppingCartPage/ShoppingCartPageSlice';
import { useAppDispatch } from '../../store';

export const ShoppingProductCard = ({ product, handleTotalPrice }: IShoppingProductCardProps) => {
	const dispatch = useAppDispatch();

	const { images, productId, price, totalPrice, title, count, countToBuy } = product;
	const [countToBuyValue, setCountToBuyValue] = useState<number>(countToBuy);
	const [totalPriceValue, setTotalPriceValue] = useState<number>(0);
	const [token] = useLocalStorage('token', '');

	const [fetchDeleteOneProduct] = useDeleteOneProductMutation();
	const [fetchUpdateCount] = useUpdateCountMutation();
	const [fetchUpdateTotalPrice] = useUpdateTotalPriceMutation();

	const imagesArray: IProductImage[] = images.map((image) => ({
		...image,
		path: API_PATH.replace('/api/', '') + image.path.replace('/uploads', ''),
	}));

	useEffect(() => {
		setTotalPriceValue(countToBuyValue * price);
		fetchUpdateCount({ productId, count: countToBuyValue, token }).unwrap();
		fetchUpdateTotalPrice({ productId, totalPrice: totalPriceValue, token });
	}, [countToBuyValue, totalPriceValue]);

	const htp = () => handleTotalPrice(totalPriceValue);

	useEffect(() => {
		htp();
	}, []);

	const handleDecrement = (e: Event) => {
		if (countToBuyValue > 0) {
			dispatch(decrementTotalPrice(price));
		}

		setCountToBuyValue((countToBuyValue) => {
			if (countToBuyValue > 0) {
				// тут нельзя вызвать диспетч, так как он сработает дважды !! ХАХАХАХХАХАХАХАХХА
				return countToBuyValue - 1;
			} else {
				return countToBuyValue;
			}
		});
	};

	const handleIncrement = (e: Event) => {
		if (countToBuyValue < count) {
			dispatch(incrementTotalPrice(price));
		}

		setCountToBuyValue((countToBuyValue) => {
			if (countToBuyValue < count) {
				return countToBuyValue + 1;
			} else {
				return countToBuyValue;
			}
		});
	};

	const handleDelete = (event: Event) => {
		event.stopPropagation();

		fetchDeleteOneProduct({ productId, token }).unwrap();

		notify('success', 'Товар успешно удалён из корзины');
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
				<div className={styles['product__data']}>
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
						<div className={styles['product__details']}>
							<span>Общее количество: {count}</span>
							<span>Цена: {priceRu(price)}</span>
						</div>
					</div>
					<span className={styles.product__count}>
						Количество:
						<Button arrow={'none'} appearance={'primary'} onClick={handleDecrement}>
							-
						</Button>
						<Input placeholder={'0...'} value={countToBuyValue} />
						<Button arrow={'none'} appearance={'primary'} onClick={handleIncrement}>
							+
						</Button>
					</span>
					<span className={styles['product__total-price']}>
						{priceRu(totalPriceValue)}
					</span>
				</div>
			</div>
			<Divider />
		</div>
	);
};
