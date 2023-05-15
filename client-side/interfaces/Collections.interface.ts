import { IProduct } from '../store/product/product.interface';

export interface ICollectionsInterface {
	name: string;
	count: number;
	products: IProduct[];
}
