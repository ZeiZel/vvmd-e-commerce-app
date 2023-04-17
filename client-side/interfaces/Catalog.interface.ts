export enum CatalogPageCategory {
	CoinsAndMedals, // Монеты и Медали монетного типа
	MedalsAndOrders, // Медали и Ордена
	SignsAndSymbols, // Знаки и Символы
	ReplicaPostageStamps, // Реплики почтовых марок
	Jewelry, // ювелирные изделия
	TokensAndShields, // Жетоны, Шильды
	Packages, // Упаковки
}

export interface ICatalogPageModel {
	image: string;
	category: CatalogPageCategory;
	name: string;
	count: number;
}
