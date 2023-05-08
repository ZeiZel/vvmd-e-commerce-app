import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_PATH } from '../../api/apiService';
import { IProduct } from './product.interface';

export interface getByCategoryArgs {
	category: string;
	limit: number;
	page: number;
}

export const productApi = createApi({
	reducerPath: 'api/product',
	baseQuery: fetchBaseQuery({
		baseUrl: API_PATH,
	}),
	endpoints: (build) => ({
		getProductById: build.mutation<IProduct, string>({
			query: (id: string) => `/product/${id}`,
		}),
		// todo: сомнительные типы
		getProducts: build.query<IProduct[], getByCategoryArgs>({
			query: ({ category = '0', limit = 20, page = 2 }) =>
				`product/category/${category}?page=${page}&limit=${limit}`,
		}),
		getAllProducts: build.query<IProduct[], any>({
			query: () => `product/`,
		}),
		getProductsByString: build.query<IProduct[], string>({
			query: (query: string) => `product/searching/search?query=${query}`,
		}),
	}),
});

export const {
	useGetProductsQuery,
	useGetAllProductsQuery,
	useGetProductsByStringQuery,
	useGetProductByIdMutation,
} = productApi;
