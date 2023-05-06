import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
	token: string | null;
}

const initialState: AuthState = {
	token: null,
};

const localStorageSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setToken(state, action: PayloadAction<string>) {
			state.token = action.payload;
			if (typeof window !== 'undefined') {
				localStorage.setItem('token', action.payload);
			}
		},
		clearToken(state) {
			state.token = null;
			if (typeof window !== 'undefined') {
				localStorage.removeItem('token');
			}
		},
	},
});

export const { reducer, actions } = localStorageSlice;

export const { setToken, clearToken } = actions;

export default reducer;
