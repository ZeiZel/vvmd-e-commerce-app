import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '../../store/product/product.interface';

export interface IProductCardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: IProduct;
}
