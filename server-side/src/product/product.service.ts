import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ProductModel } from './product.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateProductDto, ProductImageDto } from './dto/create-product.dto';
import { format } from 'date-fns';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';

@Injectable()
export class ProductService {
	constructor(
		@InjectModel(ProductModel) private readonly productModel: ModelType<ProductModel>,
	) {}

	async create(dto: CreateProductDto, images: Express.Multer.File[]): Promise<ProductModel> {
		const dateFolder = format(new Date(), 'yyyy-MM-dd');

		const uploadFolder = `${path}/uploads/${dateFolder}`;

		await ensureDir(uploadFolder);

		const imagesArray: ProductImageDto[] = [];

		for (const image of images) {
			await writeFile(`${uploadFolder}/${image.originalname}`, image.buffer);

			imagesArray.push({
				path: `/uploads/${dateFolder}/${image.originalname}`,
				name: image.originalname,
			});
		}

		dto.images = imagesArray;

		return this.productModel.create(dto);
	}

	async findById(id: string) {
		return this.productModel.findById(id).exec();
	}

	async findAll() {
		return this.productModel.find().exec();
	}

	async findByCategoryWithPagination(
		categoryNumber: number,
		@Query() page: number,
		@Query() limit: number,
	) {
		const skip = (page - 1) * limit;
		return this.productModel.find({ category: categoryNumber }).skip(skip).limit(limit).exec();
	}

	async findByString(query: string) {
		return this.productModel.find({ title: { $regex: new RegExp(query, 'i') } }).exec();
	}

	async deleteById(id: string) {
		return this.productModel.findByIdAndDelete(id).exec();
	}

	async patchById(id: string, dto: CreateProductDto) {
		return this.productModel.findByIdAndUpdate(id, dto, { new: true }).exec();
	}
}
