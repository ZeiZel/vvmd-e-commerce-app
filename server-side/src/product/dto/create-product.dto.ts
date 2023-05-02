import { IsArray, IsEnum, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CatalogPageCategory } from '../product.model';

export class ProductCharacteristicDto {
	@IsString()
	name: string;

	@IsString()
	value: string;
}

export class ProductImageDto {
	@IsString()
	name: string;

	@IsString()
	path: string;
}

export class CreateProductDto {
	@IsArray()
	@ValidateNested()
	@Type(() => ProductImageDto)
	images?: ProductImageDto[];

	@IsString()
	title: string;

	@IsNumber()
	price: number;

	@IsNumber()
	count: number;

	@IsString()
	description: string;

	@IsEnum(CatalogPageCategory)
	category: CatalogPageCategory;

	@IsArray()
	@IsString({ each: true })
	tags: string[];

	@IsArray()
	@ValidateNested() // тут мы указываем, что декоратор должен протипизировать и  объект ProductCharacteristicDto
	@Type(() => ProductCharacteristicDto)
	characteristics: ProductCharacteristicDto[];
}
