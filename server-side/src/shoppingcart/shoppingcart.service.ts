import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ShoppingCartModel } from './shoppingcart.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ProductService } from '../product/product.service';
import { AuthService } from '../auth/auth.service';
import { Types } from 'mongoose';
import { addToShoppingCardDto } from './dto/add-to-shoppingcart.dto';

@Injectable()
export class ShoppingcartService {
	constructor(
		@InjectModel(ShoppingCartModel)
		private readonly shoppingCartModel: ModelType<ShoppingCartModel>,
		private readonly productService: ProductService,
		private readonly authService: AuthService,
	) {}

	async findAll(userId: Types.ObjectId) {
		return this.shoppingCartModel.find({ userId }).exec();
	}

	async add(dto: addToShoppingCardDto) {
		const user = await this.authService.findUser(dto.login);
		const product = await this.productService.findById(dto.productId);

		let cart;

		if (user && product) {
			cart = await this.shoppingCartModel.create({
				userId: user._id,
				productId: product._id,
				totalPrice: product.price,
				price: product.price,
				count: product.count,
				images: product.images, // todo: если будут проблемы с изображениями, то брать из массива одно тут
				title: product.title,
			});

			await cart.save();
		}

		return cart;
	}

	async updateCount(productId: Types.ObjectId, count: number) {
		return this.shoppingCartModel.findOneAndUpdate(productId, { countToBuy: count }).exec();
	}

	// сюда с фронта нужно присылать подсчитанное число
	async updateTotalPrice(productId: Types.ObjectId, totalPrice: number) {
		return this.shoppingCartModel
			.findOneAndUpdate(productId, { totalPrice }, { new: true })
			.exec();
	}

	async remove(productId: string) {
		return this.shoppingCartModel.deleteOne({ productId });
	}

	async removeAll(userId: Types.ObjectId) {
		return this.shoppingCartModel.deleteMany({ userId });
	}
}
