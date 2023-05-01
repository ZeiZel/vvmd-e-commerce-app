import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
	@ApiProperty({ example: 'Olkesh' }) // для Swagger документации
	@IsNotEmpty() // не должен быть пустым
	@IsString() // обязательно строка
	login: string;

	@ApiProperty({ example: 'OlkeshKr12' })
	@IsNotEmpty()
	@IsString()
	password: string;

	@ApiProperty({ example: 'olkesh@yandex.ru' })
	@IsNotEmpty()
	@IsString()
	username: string;
}
