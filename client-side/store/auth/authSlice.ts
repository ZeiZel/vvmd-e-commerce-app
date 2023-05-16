import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthLoginResponse } from '../../interfaces/Auth.interface';

interface IUserState {
	user: IAuthLoginResponse | null;
}

const initialState: IUserState = {
	user: null,
};

export const userSlice = createSlice({
	initialState,
	name: 'user',
	reducers: {
		logout: () => initialState,
		setUser: (state, action: PayloadAction<IAuthLoginResponse>) => {
			state.user = action.payload;
			localStorage.setItem('user', JSON.stringify(state.user.user.email));
			localStorage.setItem('user-id', JSON.stringify(state.user.id));
		},
	},
});

export const { reducer, actions } = userSlice;

export const { logout, setUser } = actions;

export default reducer;
