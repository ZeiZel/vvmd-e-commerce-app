import { IProductModel } from './Product.interface';

export interface ICollectionsInterface {
	name: string;
	count: number;
	products: IProductModel[];
}
