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

class ProductCharacteristic {
	@prop()
	name: string;

	@prop()
	value: string;
}

export interface ProductModel extends Base {}

export class ProductModel extends TimeStamps {
	@prop({ type: () => [String] })
	images: string[];

	@prop()
	title: string;

	@prop()
	price: number;

	@prop()
	calculatedRating: number;

	@prop()
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
