import { IProduct } from '../store/product/product.interface';

export interface ShoppingListPiece {
	count: number;
	price: number;
	product: IProduct;
}

export interface IShoppingListModel {
	productCount: number;
	list?: ShoppingListPiece[];
}
