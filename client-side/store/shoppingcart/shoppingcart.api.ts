import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { API_FUNCTIONS, API_PATH, API_ROUTE } from '../../api/helper.api';
import { IShoppingcart, IShoppingCartProduct } from './shoppingcart.interface';

export const shoppingcartApi = createApi({
	reducerPath: 'api/shoppingcart',
	baseQuery: fetchBaseQuery({
		baseUrl: API_PATH,
	}),
	endpoints: (build) => ({
		addProductToCart: build.mutation({
			query: ({ cartProduct, token }: { cartProduct: IShoppingcart; token: string }) => ({
				url: API_ROUTE.shoppingCart + API_FUNCTIONS.shoppingCart.add,
				method: 'POST',
				body: cartProduct,
				headers: {
					Authorization: 'Bearer ' + token,
				},
			}),
		}),
		updateCount: build.mutation({
			query: ({
				productId,
				count,
				token,
			}: {
				productId: string;
				count: number;
				token: string;
			}) => ({
				url:
					API_ROUTE.shoppingCart +
					API_FUNCTIONS.shoppingCart.updateCount +
					`${productId}`,
				method: 'PATCH',
				body: {
					count: count,
				},
				headers: {
					Authorization: 'Bearer ' + token,
				},
			}),
		}),
		updateTotalPrice: build.mutation({
			query: ({
				productId,
				totalPrice,
				token,
			}: {
				productId: string;
				totalPrice: number;
				token: string;
			}) => ({
				url:
					API_ROUTE.shoppingCart +
					API_FUNCTIONS.shoppingCart.updateTotalPrice +
					`${productId}`,
				method: 'PATCH',
				body: {
					totalPrice,
				},
				headers: {
					Authorization: 'Bearer ' + token,
				},
			}),
		}),
		deleteOneProduct: build.mutation({
			query: ({ productId, token }: { productId: string; token: string }) => ({
				url: API_ROUTE.shoppingCart + API_FUNCTIONS.shoppingCart.deleteOne + `${productId}`,
				method: 'DELETE',
				headers: {
					Authorization: 'Bearer ' + token,
				},
			}),
		}),
		deleteAllProducts: build.mutation({
			query: ({ userId, token }: { userId: string; token: string }) => ({
				url: API_ROUTE.shoppingCart + API_FUNCTIONS.shoppingCart.deleteAll + `${userId}`,
				method: 'DELETE',
				headers: {
					Authorization: 'Bearer ' + token,
				},
			}),
		}),
		getAllProductsInCart: build.query<IShoppingCartProduct[], any>({
			query: ({ userId, token }) => ({
				url: API_ROUTE.shoppingCart + API_FUNCTIONS.shoppingCart.getAll + `${userId}`,
				method: 'GET',
				headers: {
					Authorization: 'Bearer ' + token,
				},
			}),
		}),
	}),
});

export const {
	useAddProductToCartMutation,
	useUpdateCountMutation,
	useUpdateTotalPriceMutation,
	useDeleteAllProductsMutation,
	useDeleteOneProductMutation,
	useGetAllProductsInCartQuery,
} = shoppingcartApi;
