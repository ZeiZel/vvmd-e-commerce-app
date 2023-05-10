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
			query: (cartProduct: IShoppingcart) => ({
				url: API_ROUTE.shoppingCart + API_FUNCTIONS.shoppingCart.add,
				method: 'POST',
				body: cartProduct,
			}),
		}),
		updateCount: build.mutation({
			query: (productId: string) => ({
				url:
					API_ROUTE.shoppingCart +
					API_FUNCTIONS.shoppingCart.updateCount +
					`${productId}`,
				method: 'PATCH',
				body: {
					count: 1,
				},
			}),
		}),
		updateTotalPrice: build.mutation({
			query: (productId: string) => ({
				url:
					API_ROUTE.shoppingCart +
					API_FUNCTIONS.shoppingCart.updateTotalPrice +
					`${productId}`,
				method: 'PATCH',
			}),
		}),
		deleteOneProduct: build.mutation({
			query: (productId: string) => ({
				url: API_ROUTE.shoppingCart + API_FUNCTIONS.shoppingCart.deleteOne + `${productId}`,
				method: 'DELETE',
			}),
		}),
		deleteAllProducts: build.mutation({
			query: (userId: string) => ({
				url: API_ROUTE.shoppingCart + API_FUNCTIONS.shoppingCart.deleteAll + `${userId}`,
				method: 'DELETE',
			}),
		}),
		getAllProductsInCart: build.query<IShoppingCartProduct[], string>({
			query: (userId) =>
				API_ROUTE.shoppingCart + API_FUNCTIONS.shoppingCart.getAll + `${userId}`,
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
