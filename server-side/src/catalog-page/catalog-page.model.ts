import { prop } from '@typegoose/typegoose';

export enum CatalogPageCategory {
	CoinsAndMedals, // Монеты и Медали монетного типа
	MedalsAndOrders, // Медали и Ордена
	SignsAndSymbols, // Знаки и Символы
	ReplicaPostageStamps, // Реплики почтовых марок
	Jewelry, // ювелирные изделия
	TokensAndShields, // Жетоны, Шильды
	Packages, // Упаковки
}

export class CatalogPageModel {
	@prop()
	image: string;

	@prop({ enum: CatalogPageCategory })
	category: CatalogPageCategory;

	@prop()
	name: string;

	@prop()
	count: number;
}
