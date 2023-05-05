import { IProductModel } from './Product.interface';

export interface ShoppingListPiece {
	count: number;
	price: number;
	product: IProductModel;
}

export interface IShoppingListModel {
	productCount: number;
	list?: ShoppingListPiece[];
}
