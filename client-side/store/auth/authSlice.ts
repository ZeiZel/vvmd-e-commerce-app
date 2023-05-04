import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from './auth.interface';

export const initialState: IInitialState = {
	toggleAuth: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		toggleForms: (state) => {
			state.toggleAuth = !state.toggleAuth;
		},
	},
});

const { actions, reducer } = authSlice;

export const { toggleForms } = actions;

export default reducer;
