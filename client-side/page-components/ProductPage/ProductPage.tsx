import React, { useEffect, useState } from 'react';
import styles from './ProductPage.module.scss';
import { Modal, SliderComponent, Spinner } from '../../components';
import { IProductCardProps } from './ProductPage.props';
import cn from 'classnames';

export const ProductPage = ({
	modal,
	setModal,
	product,
	className,
	...props
}: IProductCardProps) => {
	const { images, title, category, count, price, characteristics, tags, description } = product;

	return (
		<Modal active={modal} setActive={setModal} className={styles.product}>
			<div className={styles.product__slider}>
				<SliderComponent slides={product.images} />
			</div>
			<div className={styles.product__title}>{title}</div>
			<div className={styles.product__category}>{category}</div>
			<div className={styles.product__count}>{count}</div>
			<div className={styles.product__price}>{price}</div>
			{/*<div className={styles.product__title}>{characteristics.map()}</div>*/}
			<div className={styles.product__description}>{description}</div>
			{/*<div className={styles.product__title}>{tags.map()}</div>*/}
		</Modal>
	);
};
