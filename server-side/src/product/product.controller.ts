import {
	Body,
	Controller,
	Delete,
	Get,
	Header,
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
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Post('/create')
	@HttpCode(200)
	@UseGuards(JwtAuthGuard)
	@UseInterceptors(FileInterceptor('image'))
	// @Header('Content-Type', 'application/json')
	async create(
		@Body() dto: Omit<CreateProductDto, 'images'>,
		@UploadedFile() images: Express.Multer.File,
	): Promise<ProductModel> {
		console.log(dto);

		const product: ProductModel = await this.productService.create(dto, [images]);

		if (!product) {
			throw new NotFoundException(PRODUCT_CANNOT_CREATED);
		}

		return product;
	}

	@Get(':id')
	async get(@Param('id') id: string) {
		const product = await this.productService.findById(id);

		if (!product) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}

		return product;
	}

	@Get()
	async getAll() {
		const products = await this.productService.findAll();

		if (!products) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}

		return products;
	}

	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: CreateProductDto) {
		const updatedProduct = await this.productService.patchById(id, dto);

		if (!updatedProduct) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}

		return updatedProduct;
	}

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

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('/category/:categoryNumber')
	async findByCategoryWithPagination(
		@Param() categoryNumber: number,
		@Query() page: number,
		@Query() limit: number,
	) {
		return this.productService.findByCategoryWithPagination(categoryNumber, page, limit);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Get('/search')
	async findByString(@Query('q') query: string) {
		return this.productService.findByString(query);
	}
}
