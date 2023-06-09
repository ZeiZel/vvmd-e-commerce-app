import { IShoppingCartProduct } from '../../store/shoppingcart/shoppingcart.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IShoppingProductCardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: IShoppingCartProduct;
	handleTotalPrice: (price: number) => void;
}
