import { IsString } from 'class-validator';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export class AuthDto extends TimeStamps {
	@IsString()
	login: string;

	@IsString()
	password: string;
}
