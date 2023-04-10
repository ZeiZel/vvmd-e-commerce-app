import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
	@IsString({ message: 'Название должно быть строкой' })
	name: string;

	@IsString({ message: 'Заголовок должно быть строкой' })
	title: string;

	@IsString({ message: 'Описание должно быть строкой' })
	description: string;

	@Max(5, { message: 'Рейтинг не может быть выше 5 баллов' })
	@Min(1, { message: 'Рейтинг не может быть ниже 1 балла' })
	@IsNumber({}, { message: 'Рейтинг должен быть числом!' })
	rating: number;

	@IsString({ message: 'id продукта указан неверно' })
	productId: string;
}
