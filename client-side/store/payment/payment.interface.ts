export interface IPaymentRequest {
	amount: number;
	token: string;
}

export interface IPaymentResponse {
	confirmation: {
		confirmation_url: string;
	};
}
