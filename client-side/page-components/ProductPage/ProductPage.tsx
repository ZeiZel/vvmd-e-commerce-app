import React, { useEffect, useState } from 'react';
import styles from './ProductPage.module.scss';
import { Card, Spinner } from '../../components';
import { IProductCardProps } from './ProductPage.props';
import cn from 'classnames';
import { useAppDispatch } from '../../store';
import { useGetProductByIdMutation } from '../../store/product/product.api';
import Error404 from '../../pages/404';
import { IProduct } from '../../store/product/product.interface';

export const ProductPage = ({ product, className, ...props }: IProductCardProps) => {
	return (
		<div color={'black'} className={styles.product}>
			<div className={styles.product__title}>{}</div>
		</div>
	);
};
