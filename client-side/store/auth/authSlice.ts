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
	name: 'userSlice',
	reducers: {
		logout: () => initialState,
		setUser: (state, action: PayloadAction<IAuthLoginResponse>) => {
			state.user = action.payload;
		},
	},
});

export const { reducer, actions } = userSlice;

export const { logout, setUser } = actions;

export default reducer;
