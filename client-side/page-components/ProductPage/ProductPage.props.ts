import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { IProductModel } from '../../interfaces/Product.interface';

export interface IProductCardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	products: IProductModel[];
	active: boolean;
	setActive: () => void;
}
