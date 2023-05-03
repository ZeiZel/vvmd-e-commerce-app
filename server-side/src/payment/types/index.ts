import { ApiProperty } from '@nestjs/swagger';

export class MakePaymentResponse {
	@ApiProperty({ example: '2be48318-000f-5000-8000-19671f52f233' })
	id: string;

	@ApiProperty({ example: 'pending' })
	status: string;

	@ApiProperty({
		example: {
			value: '100.00',
			currency: 'RUB',
		},
	})
	amount: {
		value: string;
		currency: string;
	};

	@ApiProperty({ example: 'Заказ №1' })
	description: string;

	@ApiProperty({
		example: {
			account_id: '2070746',
			gateway_id: '2070746',
		},
	})
	recipient: {
		account_id: string;
		gateway_id: string;
	};

	@ApiProperty({ example: '2023-05-03T14:27:36.397Z' })
	created_at: Date;

	@ApiProperty({
		example: {
			type: 'redirect',
			confirmation_url:
				'https://yoomoney.ru/checkout/payments/v2/contract?orderId=2be48318-000f-5000-8000-19671f52f233',
		},
	})
	confirmation: {
		type: string;
		confirmation_url: string;
	};

	@ApiProperty({ example: true })
	test: boolean;

	@ApiProperty({ example: true })
	paid: boolean;

	@ApiProperty({ example: true })
	refundable: boolean;

	metadata: object;
}
