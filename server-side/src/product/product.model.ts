import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

export enum CatalogPageCategory {
	CoinsAndMedals,
	MedalsAndOrders,
	SignsAndSymbols,
	ReplicaPostageStamps,
	Jewelry,
	TokensAndShields,
	Packages,
}

export class ProductCharacteristic {
	@prop({ default: 'имя не задано' })
	name: string;

	@prop({ default: 'значение не задано' })
	value: string;
}

export class ProductImageDto {
	@prop()
	name: string;

	@prop()
	path: string;
}

export interface ProductModel extends Base {}
export class ProductModel extends TimeStamps {
	@prop({ type: () => [ProductImageDto] })
	images?: ProductImageDto[];

	@prop({ default: 'Товар отсутствует' })
	title: string;

	@prop({ default: 0 })
	price: number;

	@prop({ default: 0 })
	count: number;

	@prop({ default: 'Описание для данного товара отсутствует' })
	description: string;

	@prop({ enum: CatalogPageCategory })
	category: CatalogPageCategory;

	@prop({ type: () => [String] })
	tags: string[];

	@prop({
		type: () => [ProductCharacteristic],
		_id: false,
	})
	characteristics: ProductCharacteristic[];
}
