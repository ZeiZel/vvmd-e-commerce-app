import { CatalogPageCategory } from './Catalog.interface';

export interface IReviewModel {
	name: string;
	title: string;
	description: string;
	rating: number;
	createdAt: Date;
	productId: string;
}

export interface IProductCharacteristic {
	name: string;
	value: string;
}

export interface ITag {
	name: string;
	url: string;
}

export interface IProductModel {
	images: string[];
	title: string;
	description: string;
	price: number;
	calculatedRating: number;
	category: CatalogPageCategory;
	tags: ITag[];
	characteristics: IProductCharacteristic[];
	comments?: IReviewModel[];
	rating?: number;
}
