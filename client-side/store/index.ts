import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

const stringMiddleware =
	({ dispatch, getState }) =>
	(dispatch) =>
	(action) => {
		if (typeof action === 'string') return dispatch({ type: action });
		return dispatch(action);
	};

export const store = configureStore({
	reducer: {
		products,
		collections,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	devTools: process.env.NODE_ENV === 'development',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(stringMiddleware, apiSlice.middleware),
});
