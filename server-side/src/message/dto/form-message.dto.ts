import { IsString } from 'class-validator';

export class FormMessageDto {
	@IsString()
	name: string;

	@IsString()
	surname: string;

	@IsString()
	phoneNumber: string;

	@IsString()
	email: string;

	@IsString()
	message: string;
}
