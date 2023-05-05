import Image from 'next/image';

export enum CatalogPageCategory {
	CoinsAndMedals,
	MedalsAndOrders,
	SignsAndSymbols,
	ReplicaPostageStamps,
	Jewelry,
	TokensAndShields,
	Packages,
}

export interface ICatalogPageModel {
	image: string;
	category: CatalogPageCategory;
	title: string;
}
