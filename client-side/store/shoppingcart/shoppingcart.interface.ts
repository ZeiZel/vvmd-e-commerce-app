export interface IShoppingcart {
	login: string;
	productId: string;
}

export interface IProductImage {
	name: string;
	path: string;
}

export interface IShoppingCartProduct {
	userId: string;
	productId: string;
	images?: IProductImage[];
	title: string;
	price: number;
	totalPrice: number;
	count: number;
	countToBuy: number;
}
