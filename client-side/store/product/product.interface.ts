export enum CatalogPageCategory {
	CoinsAndMedals,
	MedalsAndOrders,
	SignsAndSymbols,
	ReplicaPostageStamps,
	Jewelry,
	TokensAndShields,
	Packages,
}

export interface IProductCharacteristic {
	name: string;
	value: string;
}

export interface IProductImage {
	name: string;
	path: string;
}

export interface IProduct {
	images?: IProductImage[];
	title: string;
	price: number;
	count: number;
	description: string;
	category: CatalogPageCategory;
	tags: string[];
	characteristics: IProductCharacteristic[];
}
