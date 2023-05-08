import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
	mode: 'light' | 'dark';
}

const initialState: ThemeState = {
	mode: 'light',
};

const toggleThemeSlice = createSlice({
	name: 'toggleTheme',
	initialState,
	reducers: {
		toggleTheme(state) {
			state.mode = state.mode === 'light' ? 'dark' : 'light';
			if (typeof window !== 'undefined') {
				localStorage.setItem('mode', state.mode);
			}
		},
	},
});

export const { reducer, actions } = toggleThemeSlice;

export const { toggleTheme } = actions;

export default reducer;
