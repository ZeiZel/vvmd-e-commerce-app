import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ShoppingProductCard.module.scss';
import { IShoppingProductCardProps } from './ShoppingProductCard.props';
import { Divider } from '../Divider/Divider';
import { API_PATH } from '../../api/helper.api';
import { IProductImage } from '../../interfaces/Product.interface';
import { HTag } from '../HTag/HTag';
import { ErrorPage } from '../../page-components';
import { priceRu } from '../../helpers';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export const ShoppingProductCard = ({ product }: IShoppingProductCardProps) => {
	const { images, productId, price, totalPrice, title, count, countToBuy } = product;
	const [countToBuyValue, setCountToBuyValue] = useState<number>(countToBuy);

	if (!images) return <ErrorPage type={'500'} />;

	const imagesArray: IProductImage[] = images.map((image) => ({
		...image,
		path: API_PATH.replace('/api/', '') + image.path.replace('/uploads', ''),
	}));

	return (
		<div className={styles.product}>
			<div className={styles['product__wrapper']}>
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
						onClick={() =>
							setCountToBuyValue(countToBuyValue > 0 ? countToBuyValue - 1 : 0)
						}
					>
						-
					</Button>
					<Input placeholder={'0...'} value={countToBuyValue} />
					<Button
						arrow={'none'}
						appearance={'primary'}
						onClick={() =>
							setCountToBuyValue(
								countToBuyValue < count ? countToBuyValue + 1 : count,
							)
						}
					>
						+
					</Button>
				</span>
				<span className={styles['product__total-price']}>
					К общей стоимости: {totalPrice}
				</span>
			</div>

			<Divider />
		</div>
	);
};
