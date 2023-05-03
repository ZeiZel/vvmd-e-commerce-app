import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';

export class ProductImageDto {
	@prop()
	name: string;

	@prop()
	path: string;
}

export interface ShoppingCartModel extends Base {}
export class ShoppingCartModel extends TimeStamps {
	@prop()
	userId: Types.ObjectId;

	@prop()
	productId: Types.ObjectId;

	@prop({ type: () => [ProductImageDto] })
	images?: ProductImageDto[];

	@prop()
	title: string;

	@prop({ default: 0 })
	price: number;

	@prop({ default: 0 })
	totalPrice: number;

	@prop({ default: 0 })
	count: number;

	@prop({ default: 0 })
	countToBuy: number;
}
