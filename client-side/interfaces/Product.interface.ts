import { CatalogPageCategory } from './Catalog.interface';

export interface IProductCharacteristic {
	name: string;
	value: string;
}

export interface IProductImage {
	name: string;
	path: string;
}

export interface IProductModel {
	images?: IProductImage[];
	title: string;
	price: number;
	count: number;
	description: string;
	category: CatalogPageCategory;
	tags: string[];
	characteristics: IProductCharacteristic[];
}
