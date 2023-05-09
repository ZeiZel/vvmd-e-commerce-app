import { ApiProperty } from '@nestjs/swagger';

/* Тут описаны типы данных для Swagger, которые поступают и выходят из контроллера */

export class LoginUserRequest {
	@ApiProperty({ example: 'olkesh@yandex.ru' })
	email: string;

	@ApiProperty({ example: 'Olkeshr1234' })
	password: string;
}

export class LoginUserResponse {
	@ApiProperty({
		example: {
			email: 'olekich1@yandex.ru',
			username: 'olekich1',
			password: '$2a$10$KapW1tpdEHdfcHbkxESyHuiz5cr1qfTN3C1pWk/TZlBpQehcrSCXq',
		},
	})
	user: {
		email: string;
		username: string;
		password: string;
	};

	@ApiProperty({ example: 'string' })
	access_token: string;
}

export class RegisterUserRequest {
	@ApiProperty({ example: 'olek' })
	username: string;

	@ApiProperty({ example: 'olek@yandex.ru' })
	login: string;

	@ApiProperty({ example: 'olekoshkoLerlor' })
	password: string;
}

export class RegisterUserResponse {
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

export class FindUserByDtoRequest {
	@ApiProperty({ example: 'olek' })
	username: string;

	@ApiProperty({ example: 'olek@yandex.ru' })
	login: string;

	@ApiProperty({ example: 'olekoshkoLerlor' })
	password: string;
}

export class FindUserByDtoResponse {
	@ApiProperty({ example: '644e364634659012bdad3adc' })
	_id: string;

	@ApiProperty({ example: 'olek@yandex.ru' })
	email: string;

	@ApiProperty({ example: 'olekich' })
	username: string;

	@ApiProperty({ example: '$2a$10$y1xHHc72FwebYiK7xZq1oO0CQ2mUbZioS/pYUk2ZuOKGjJgdlyDBe' })
	passwordHash: string;

	@ApiProperty({ example: '2023-04-30T09:35:02.909Z' })
	createdAt: Date;

	@ApiProperty({ example: '2023-04-30T09:35:02.909Z' })
	updatedAt: Date;

	@ApiProperty({ example: 0 })
	__v: number;
}

export class FindUserByIdRequest {}

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
