import { ApiProperty } from '@nestjs/swagger';

export class CreateProductRequest {
	@ApiProperty({ example: 'Kirov SSK' })
	title: string;

	@ApiProperty({ example: 10000 })
	price: string;

	@ApiProperty({ example: 10 })
	count: string;

	@ApiProperty({ example: 'Медаль в честь кировского ССК' })
	description: string;

	@ApiProperty({ example: 0 })
	category: string;

	@ApiProperty({ example: 'медаль' })
	tags: string;

	@ApiProperty({ example: { name: 'карат', value: '999' } })
	characteristics: {
		name: string;
		value: string;
	};
}

export class ProductResponse {
	@ApiProperty({
		example: {
			name: 'img1.png',
			path: '/uploads/2023-05-02/img1.png',
			_id: '6451417b9a491b06f581223b',
		},
	})
	images: string;

	@ApiProperty({ example: 'Kirov SSK' })
	title: string;

	@ApiProperty({ example: 10000 })
	price: string;

	@ApiProperty({ example: 10 })
	count: string;

	@ApiProperty({ example: 'Медаль в честь кировского ССК' })
	description: string;

	@ApiProperty({ example: 0 })
	category: string;

	@ApiProperty({ example: 'медаль' })
	tags: string;

	@ApiProperty({ example: { name: 'карат', value: '999' } })
	characteristics: {
		name: string;
		value: string;
	};
}

export class FindProductByIdRequest {}
export class FindUserByIdResponse {
	@ApiProperty({ example: '644e364634659012bdad3adc' })
	_id: string;

	@ApiProperty({ example: 'olek@yandex.ru' })
	email: string;

	@ApiProperty({ example: '$2a$10$y1xHHc72FwebYiK7xZq1oO0CQ2mUbZioS/pYUk2ZuOKGjJgdlyDBe' })
	passwordHash: string;

	@ApiProperty({ example: '2023-04-30T09:35:02.909Z' })
	createdAt: Date;

	@ApiProperty({ example: '2023-04-30T09:35:02.909Z' })
	updatedAt: Date;

	@ApiProperty({ example: 0 })
	__v: number;
}
