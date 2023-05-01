import { IsArray, IsEnum, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CatalogPageCategory } from '../product.model';

class ProductCharacteristicDto {
	@IsString()
	name: string;

	@IsString()
	value: string;
}

export class CreateProductDto {
	@IsArray()
	@IsString({ each: true })
	images: string[];

	@IsString()
	title: string;

	@IsNumber()
	price: number;

	@IsNumber()
	count: number;

	@IsNumber()
	calculatedRating: number;

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
