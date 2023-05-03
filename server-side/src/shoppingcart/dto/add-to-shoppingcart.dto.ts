import { IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class addToShoppingCardDto {
	@IsNotEmpty()
	@IsString()
	login: string; // email

	@IsString()
	userId?: Types.ObjectId;

	@IsNotEmpty()
	@IsString()
	productId: Types.ObjectId;
}
