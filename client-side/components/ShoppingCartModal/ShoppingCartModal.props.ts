import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IShoppingCartProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface IShoppingCartModalProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	userId: string;
}
