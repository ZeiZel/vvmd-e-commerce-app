import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_FUNCTIONS, API_PATH, API_ROUTE } from '../../api/apiService';
import {
	IAuthLogin,
	IAuthLoginResponse,
	IAuthRegister,
	IAuthRegisterResponse,
} from '../../interfaces/Auth.interface';

export const authApi = createApi({
	reducerPath: 'auth',
	baseQuery: fetchBaseQuery({
		baseUrl: API_PATH,
	}),
	endpoints: (builder) => ({
		register: builder.mutation<IAuthRegisterResponse, IAuthRegister>({
			query: (user: IAuthRegister) => ({
				url: API_ROUTE.auth + API_FUNCTIONS.auth.register,
				method: 'POST',
				body: user,
			}),
		}),
		login: builder.mutation<IAuthLoginResponse, IAuthLogin>({
			query: (user: IAuthLogin) => ({
				url: API_ROUTE.auth + API_FUNCTIONS.auth.login,
				method: 'POST',
				body: user,
			}),
		}),
	}),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
