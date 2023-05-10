import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { API_FUNCTIONS, API_PATH, API_ROUTE } from '../../api/helper.api';

export const paymentApi = createApi({
	reducerPath: 'payment',
	baseQuery: fetchBaseQuery({
		baseUrl: API_PATH,
	}),
	endpoints: (build) => ({
		makePayment: build.mutation({
			query: (amount: number) => ({
				url: API_ROUTE.payment + API_FUNCTIONS.payment.makePayment,
				method: 'POST',
				body: {
					amount,
				},
			}),
		}),
	}),
});

export const { useMakePaymentMutation } = paymentApi;
