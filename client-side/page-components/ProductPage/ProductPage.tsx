import React from 'react';
import styles from './ProductPage.module.scss';
import {
	Button,
	Characteristics,
	HTag,
	Modal,
	Paragraph,
	SliderComponent,
	Spinner,
	Tag,
} from '../../components';
import { IProductCardProps } from './ProductPage.props';
import { IProductImage } from '../../interfaces/Product.interface';
import { API_PATH } from '../../api/helper.api';
import { catalogPageData, declOfNum, priceRu } from '../../helpers';

export const ProductPage = ({
	modal,
	setModal,
	product,
	className,
	addToProductCart,
	...props
}: IProductCardProps) => {
	const { images, title, category, count, price, characteristics, tags, description } = product;

	const { title: categoryName } = catalogPageData[category];

	const imagesArray: IProductImage[] = images.map((image) => ({
		...image,
		path: API_PATH.replace('/api/', '') + image.path.replace('/uploads', ''),
	}));

	return (
		<Modal active={modal} setActive={setModal} className={styles.product}>
			<div className={styles.product__wrapper}>
				<div className={styles.product__slider}>
					<SliderComponent images={imagesArray} />
				</div>
				<HTag tag={'h2'} className={styles.product__title}>
					{title}
				</HTag>
				<Paragraph className={styles.product__description}>{description}</Paragraph>
				<div className={styles.product__order}>
					<span>
						{count} товар{declOfNum(count, ['', 'а', 'ов'])}
					</span>
					<span>{priceRu(price)}</span>
					<Button arrow={'none'} appearance={'primary'} onClick={addToProductCart}>
						Добавить в корзину
					</Button>
				</div>
				<div className={styles.product__characteristics}>
					{<Characteristics characteristics={product.characteristics} />}
				</div>
				<div className={styles.product__details}>
					Теги:
					{tags.map((tag) => (
						<Tag key={tag} size={'s'} color={'ghost'}>
							{tag}
						</Tag>
					))}
				</div>
			</div>
		</Modal>
	);
};
