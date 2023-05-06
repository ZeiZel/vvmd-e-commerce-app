import React from 'react';
import styles from './ProductPage.module.scss';
import { Card, Modal, Slider } from '../../components';
import { IProductCardProps } from './ProductPage.props';
import cn from 'classnames';

const ProductPage = ({ products, active, setActive, className, ...props }: IProductCardProps) => {
	return (
		<Modal active={active} setActive={setActive}>
			<Card color={'black'}>
				<div className={cn(className, styles['product-page'])}>
					<Slider className={cn(styles['product-page__slider'])}></Slider>
				</div>
			</Card>
		</Modal>
	);
};

export default ProductPage;
