import React, { useState } from 'react';
import { IProductCardInterface } from './ProductCard.props';
import { Card } from '../Card/Card';
import styles from './ProductCard.module.scss';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { HTag, Modal, Rating } from '../';
import { ErrorPage, ProductPage } from '../../page-components';

export const ProductCard = ({ product }: IProductCardInterface) => {
	const [modal, setModal] = useState<boolean>(false);

	if (!product) {
		return <ErrorPage type={'404'} />;
	}

	const { images, title, count, price, id } = product;

	const img = product.images ? product.images[0].path : 'Not Found';

	return (
		<div>
			<Card
				onClick={() => setModal(!modal)}
				color={'black'}
				className={styles['product-card']}
			>
				<div className={styles['product-card__image']}>
					<Image src={img} alt='CatalogPage' width={200} height={200} />
				</div>
				<HTag tag={'h2'}>{title}</HTag>
				<div className='product-details'>
					{count ? <p>Available: {count}</p> : <p>Под заказ</p>}
					{price ? (
						<p>Price: ${price}</p>
					) : (
						<Button arrow={'none'} appearance={'ghost'}>
							<div>Оформить заказ</div>
						</Button>
					)}
				</div>
			</Card>
			<Modal active={modal} setActive={setModal}>
				<ProductPage product={product} />
			</Modal>
		</div>
	);
};
