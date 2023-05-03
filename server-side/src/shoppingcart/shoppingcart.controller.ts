import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ShoppingcartService } from './shoppingcart.service';
import { Types } from 'mongoose';
import { addToShoppingCardDto } from './dto/add-to-shoppingcart.dto';

@Controller('shoppingcart')
export class ShoppingcartController {
	constructor(private readonly shoppingCartService: ShoppingcartService) {}

	@Get('/:userId')
	async getAll(@Param('userId') userId: Types.ObjectId) {
		return this.shoppingCartService.findAll(userId);
	}

	@Post()
	async add(dto: addToShoppingCardDto) {
		return this.shoppingCartService.add(dto);
	}

	@Post('/updateCount/:productId')
	async updateCount(@Param('productId') productId: Types.ObjectId, @Body() count: number) {
		return this.shoppingCartService.updateCount(productId, count);
	}

	@Post('/updateTotalPrice/:productId')
	async updateTotalPrice(
		@Param('productId') productId: Types.ObjectId,
		@Body() totalPrice: number,
	) {
		return this.shoppingCartService.updateTotalPrice(productId, totalPrice);
	}
}
