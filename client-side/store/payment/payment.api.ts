import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { API_FUNCTIONS, API_PATH, API_ROUTE } from '../../api/helper.api';
import { IPaymentRequest, IPaymentResponse } from './payment.interface';

export const paymentApi = createApi({
	reducerPath: 'payment',
	baseQuery: fetchBaseQuery({
		baseUrl: API_PATH,
	}),
	endpoints: (build) => ({
		makePayment: build.mutation<IPaymentResponse, IPaymentRequest>({
			query: ({ amount, token }) => ({
				url: API_ROUTE.payment + API_FUNCTIONS.payment.makePayment,
				method: 'POST',
				body: {
					amount,
				},
				headers: {
					Authorization: 'Bearer ' + token,
				},
			}),
		}),
	}),
});

export const { useMakePaymentMutation } = paymentApi;
