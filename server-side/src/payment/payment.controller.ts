import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { MakePaymentDto } from './dto/make-payment.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { ApiOkResponse } from '@nestjs/swagger';
import { MakePaymentResponse } from './types';

@Controller('payment')
export class PaymentController {
	constructor(private readonly paymentService: PaymentService) {}

	@ApiOkResponse({ type: MakePaymentResponse })
	@UseGuards(JwtAuthGuard)
	@Post()
	async makePayment(@Body() dto: MakePaymentDto) {
		return this.paymentService.makePayment(dto);
	}
}
