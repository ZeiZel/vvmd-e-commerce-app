import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_PATH } from '../../api/apiService';
import { IProduct } from './product.interface';

export const productApi = createApi({
	reducerPath: 'api/product',
	baseQuery: fetchBaseQuery({
		baseUrl: API_PATH,
	}),
	endpoints: (build) => ({
		// todo: сомнительные типы
		getProducts: build.query<IProduct[], number>({
			query: (category: number = 0, limit: number = 20, page: number = 2) =>
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

export const { useGetProductsQuery, useGetAllProductsQuery, useGetProductsByStringQuery } =
	productApi;
