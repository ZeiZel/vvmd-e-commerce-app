import { useEffect } from 'react';
import { useTheme } from '../../../hooks/useTheme';
import styles from './ThemeToggle.module.scss';
import { RootState, useAppSelector } from '../../../store';

export const ThemeToggle = () => {
	const { toggle } = useTheme();
	const mode = useAppSelector((state: RootState) => state.toggleTheme.theme);

	const handleToggleMode = () => {
		toggle();
		document.body.classList.toggle('dark_mode');
	};

	useEffect(() => {
		document.body.classList.add(mode === 'dark' ? 'dark_mode' : 'body');
	}, [mode]);

	return (
		<div className={styles.theme}>
			<input
				className={styles.theme__input}
				type='checkbox'
				checked={mode === 'light'}
				onChange={handleToggleMode}
			/>
		</div>
	);
};
