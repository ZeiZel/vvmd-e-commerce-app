import { useCallback, useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../store';
import { toggleTheme } from '../store/toggleTheme/toggleThemeSlice';

export const useTheme = () => {
	const dispatch = useAppDispatch();
	const mode = useAppSelector((state: RootState) => state.toggleTheme.mode);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const storedMode = localStorage.getItem('mode');

			if (storedMode && ['dark', 'light'].includes(storedMode)) {
				dispatch(toggleTheme());
			}
		}
	}, [dispatch]);

	const toggle = useCallback(() => {
		dispatch(toggleTheme());
	}, [dispatch]);

	return { mode, toggle };
};
