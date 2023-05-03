import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { ShoppingcartService } from './shoppingcart.service';
import { Types } from 'mongoose';
import { addToShoppingCardDto } from './dto/add-to-shoppingcart.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller('shoppingcart')
export class ShoppingcartController {
	constructor(private readonly shoppingCartService: ShoppingcartService) {}

	@UseGuards(JwtAuthGuard)
	@UsePipes(new ValidationPipe())
	@Get('/:userId')
	async getAll(@Param('userId') userId: Types.ObjectId) {
		return this.shoppingCartService.findAll(userId);
	}

	@UseGuards(JwtAuthGuard)
	@Post()
	async add(@Body() dto: addToShoppingCardDto) {
		return this.shoppingCartService.add(dto);
	}

	@UseGuards(JwtAuthGuard)
	@Patch('/count/:productId')
	async updateCount(
		@Param('productId') productId: Types.ObjectId,
		@Body() { count }: { count: number },
	) {
		return this.shoppingCartService.updateCount(productId, count);
	}

	@UseGuards(JwtAuthGuard)
	@UsePipes(new ValidationPipe())
	@Patch('/totalPrice/:productId')
	async updateTotalPrice(
		@Param('productId') productId: Types.ObjectId,
		@Body() { totalPrice }: { totalPrice: number },
	) {
		return this.shoppingCartService.updateTotalPrice(productId, totalPrice);
	}

	@UseGuards(JwtAuthGuard)
	@UsePipes(new ValidationPipe())
	@Delete('/:userId')
	async deleteAll(@Param('userId') userId: Types.ObjectId) {
		return this.shoppingCartService.removeAll(userId);
	}

	@UseGuards(JwtAuthGuard)
	@UsePipes(new ValidationPipe())
	@Delete('/one/:productId')
	async delete(@Param('productId') productId: string) {
		return this.shoppingCartService.remove(productId);
	}
}
