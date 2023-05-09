import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	NotFoundException,
	Param,
	Patch,
	Post,
	Query,
	UploadedFile,
	UseGuards,
	UseInterceptors,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductModel } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
import { PRODUCT_CANNOT_CREATED, PRODUCT_NOT_FOUND_ERROR } from './product.constants';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { Types } from 'mongoose';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import {
	ProductResponse,
	CreateProductRequest,
	FindProductByIdRequest,
	FindUserByIdResponse,
} from './types';

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@ApiBody({ type: CreateProductRequest })
	@ApiOkResponse({ type: ProductResponse })
	@Post('/create')
	@HttpCode(200)
	@UseGuards(JwtAuthGuard)
	async create(@Body() dto: Omit<CreateProductDto, 'images'>): Promise<ProductModel> {
		const product: ProductModel = await this.productService.create(dto);

		if (!product) {
			throw new NotFoundException(PRODUCT_CANNOT_CREATED);
		}

		return product;
	}

	@ApiOkResponse({ type: ProductResponse })
	@Post('/addImg/:id')
	@HttpCode(200)
	@UseInterceptors(FileInterceptor('image'))
	async addImgToProduct(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {
		return this.productService.addImgToProduct(id, [file]);
	}

	@ApiOkResponse({ type: FindUserByIdResponse })
	@Get(':id')
	async get(@Param('id') id: Types.ObjectId) {
		const product = await this.productService.findById(id);

		if (!product) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}

		return product;
	}

	@ApiOkResponse({ type: [ProductResponse] })
	@Get()
	async getAll() {
		const products = await this.productService.findAll();

		if (!products) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}

		return products;
	}

	@ApiOkResponse({ type: ProductResponse })
	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: CreateProductDto) {
		const updatedProduct = await this.productService.patchById(id, dto);

		if (!updatedProduct) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}

		return updatedProduct;
	}

	@ApiOkResponse({ type: ProductResponse })
	@UseGuards(JwtAuthGuard)
	@HttpCode(200)
	@Delete(':id')
	async delete(@Param('id') id: string) {
		const deletedProduct = await this.productService.deleteById(id);

		if (!deletedProduct) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}

		return deletedProduct;
	}

	@ApiOkResponse({ type: [ProductResponse] })
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Get('/category/:categoryNumber')
	async findByCategoryWithPagination(
		@Param('categoryNumber') categoryNumber: number,
		@Query('page') page: number,
		@Query('limit') limit: number,
	) {
		return this.productService.findByCategoryWithPagination(categoryNumber, page, limit);
	}

	@ApiOkResponse({ type: ProductResponse })
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Get('/searching/search')
	async findString(@Query('query') query: string) {
		return await this.productService.findByString(query);
	}
}
