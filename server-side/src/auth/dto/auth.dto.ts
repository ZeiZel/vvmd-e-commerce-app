import { IsString } from 'class-validator';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export class AuthDto extends TimeStamps {
	@IsString()
	name: string;

	@IsString()
	password: string;
}
