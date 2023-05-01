import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ProductModel } from './product.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';

@Injectable()
export class ProductService {
	constructor(
		@InjectModel(ProductModel) private readonly productModel: ModelType<ProductModel>,
	) {}

	async create(dto: CreateProductDto) {
		return this.productModel.create(dto);
	}

	async findById(id: string) {
		return this.productModel.findById(id).exec();
	}

	async deleteById(id: string) {
		return this.productModel.findByIdAndDelete(id).exec();
	}

	async patchById(id: string, dto: CreateProductDto) {
		return this.productModel.findByIdAndUpdate(id, dto, { new: true }).exec();
	}

	async findWithReviews(dto: FindProductDto) {
		return this.productModel
			.aggregate([
				// ищем только по подходящей категории
				{ $match: { categories: dto.category } },
				// устанавливаем стабильную сортировку, чтобы всегда возвращался список в одинаковой последовательности
				{ $sort: { _id: 1 } },
				// ограничиваем выборку товаров определённым лимитом
				{ $limit: dto.limit },
				// дальше нужно подтянуть данные из документа review
				{
					$lookup: {
						// откуда
						from: 'Review',
						// локальное поле для поиска (наш id)
						localField: '_id',
						// поле, в котором и будем искать (связанное поле id с нашим id)
						foreignField: 'productId',
						// псевдоним для поля, который выйдет в результате
						as: 'reviews',
					},
				},
				// далее добавляем недостающие поля
				{
					$addFields: {
						// число обзоров у продукта
						reviewCount: {
							// размер массива
							$size: '$reviews', // ссылаемся на сгенерированное поле через $lookup
						},
						// считаем средний рейтинг
						reviewAvg: {
							// считаем среднее значение
							$avg: '$reviews.rating', // обращаемся к полю, описанному в ReviewModel
						},
					},
				},
			])
			.exec();
	}
}
