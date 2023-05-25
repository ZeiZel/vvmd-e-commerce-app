import { createSlice } from '@reduxjs/toolkit';

interface ShoppingCartState {
	totalPrice: number;
}

const initialState: ShoppingCartState = {
	totalPrice: 0,
};

const shoppingCartSlice = createSlice({
	name: 'shoppingCart',
	initialState,
	reducers: {
		setTotalPrice: (state, action) => {
			state.totalPrice += action.payload;
		},
		incrementTotalPrice: (state, action) => {
			state.totalPrice += action.payload;
		},
		decrementTotalPrice: (state, action) => {
			state.totalPrice -= action.payload;
		},
	},
});

export const { actions, reducer } = shoppingCartSlice;

export const { setTotalPrice, incrementTotalPrice, decrementTotalPrice } = actions;

export default reducer;
