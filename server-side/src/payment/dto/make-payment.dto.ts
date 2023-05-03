import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class MakePaymentDto {
	@ApiProperty({ example: 100 })
	@IsNotEmpty()
	@IsNumber()
	amount: number;
}
