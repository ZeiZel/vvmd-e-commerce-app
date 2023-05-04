import { configureStore, Store } from '@reduxjs/toolkit';
import { productApi } from './product/product.api';
import { shoppingcartApi } from './shoppingcart/shoppingcart.api';
import { paymentApi } from './payment/payment.api';
import { authApi } from './auth/authApi';
import authentication from './auth/authSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export function makeStore(): Store {
	return configureStore({
		reducer: {
			authentication,
			[authApi.reducerPath]: authApi.reducer,
			[productApi.reducerPath]: productApi.reducer,
			[paymentApi.reducerPath]: paymentApi.reducer,
			[shoppingcartApi.reducerPath]: shoppingcartApi.reducer,
		},
		devTools: process.env.NODE_ENV === 'development',
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(
				productApi.middleware,
				paymentApi.middleware,
				shoppingcartApi.middleware,
				authApi.middleware,
			),
	});
}

const store = makeStore();

export type TypeRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// export type AppThunk<ReturnType = void> = ThunkAction<
// 	ReturnType,
// 	AppState,
// 	unknown,
// 	Action<string>
// >;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TypeRootState> = useSelector;

export default store;
