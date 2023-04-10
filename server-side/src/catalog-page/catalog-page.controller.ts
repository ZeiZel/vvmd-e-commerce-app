import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { FindCatalogPageDto } from './dto/find-catalog-page.dto';

@Controller('catalog-page')
export class CatalogPageController {
	@Get('categories')
	async getCategories() {
		return;
	}

	@HttpCode(200)
	@Post()
	async findProducts(@Body('categoryId') dto: FindCatalogPageDto) {
		return;
	}
}
