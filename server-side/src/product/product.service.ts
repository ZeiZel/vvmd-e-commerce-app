import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ProductModel } from './product.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateProductDto } from './dto/create-product.dto';
import { FilesService } from '../files/files.service';

@Injectable()
export class ProductService {
	constructor(
		@InjectModel(ProductModel) private readonly productModel: ModelType<ProductModel>,
		private readonly filesService: FilesService,
	) {}

	async create(dto: CreateProductDto): Promise<ProductModel> {
		return this.productModel.create(dto);
	}

	async addImgToProduct(id: string, files: Express.Multer.File[]) {
		const images = await this.filesService.saveFiles(files);

		const products = await this.productModel.findById(id);

		if (products) {
			products.images = images;
			await products.save();
		}

		return products;
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
