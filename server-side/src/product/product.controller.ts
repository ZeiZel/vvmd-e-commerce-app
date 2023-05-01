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
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductModel } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { PRODUCT_NOT_FOUND_ERROR } from './product.constants';

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Post('create')
	async create(@Body() dto: CreateProductDto) {
		return this.productService.create(dto);
	}

	@Get(':id')
	async get(@Param('id') id: string) {
		const product = this.productService.findById(id);

		if (!product) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}

		return;
	}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: ProductModel) {
		const updatedProduct = this.productService.patchById(id, dto);

		if (!updatedProduct) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}

		return;
	}

	@HttpCode(200)
	@Delete(':id')
	async delete(@Param('id') id: string) {
		const deletedProduct = this.productService.deleteById(id);

		if (!deletedProduct) {
			throw new NotFoundException(PRODUCT_NOT_FOUND_ERROR);
		}

		return;
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindProductDto) {
		return this.productService.findWithReviews(dto);
	}
}
