import { Action, configureStore, Store, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { productApi } from './product/product.api';
import { shoppingcartApi } from './shoppingcart/shoppingcart.api';
import { paymentApi } from './payment/payment.api';
import { authApi } from './auth/authApi';
import { contactFormApi } from '../page-components/MainPage/ContactSection/contactSlice';
import authentication from './auth/authSlice';
import toggleTheme from './toggleTheme/toggleThemeSlice';
import localStorage from './localStorage/localStorageSlice';
import shoppingCart from '../page-components/ShoppingCartPage/ShoppingCartPageSlice';

export function makeStore(): Store {
	return configureStore({
		reducer: {
			shoppingCart,
			localStorage,
			toggleTheme,
			authentication,
			[contactFormApi.reducerPath]: contactFormApi.reducer,
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
				contactFormApi.middleware,
			),
	});
}

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// export type AppThunk<ReturnType = void> = ThunkAction<
// 	ReturnType,
// 	RootState,
// 	unknown,
// 	Action<string>
// >;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
