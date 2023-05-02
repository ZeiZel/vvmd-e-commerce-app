import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ProductModel } from './product.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateProductDto, ProductImageDto } from './dto/create-product.dto';
import { format } from 'date-fns';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';
import { FilesService } from '../files/files.service';
import { FileElementResponse } from '../files/dto/file-element.response';

@Injectable()
export class ProductService {
	constructor(
		@InjectModel(ProductModel) private readonly productModel: ModelType<ProductModel>,
		private readonly filesService: FilesService,
	) {}

	async create(
		dto: Omit<CreateProductDto, 'images'>,
		files: Express.Multer.File[],
	): Promise<ProductModel> {
		const product = await this.productModel.create(dto);

		if (files && files.length) {
			product.images = await this.filesService.saveFiles(files);
			await product.save();
		}

		return product;
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
