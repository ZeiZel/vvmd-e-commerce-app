import React from 'react';
import { Button } from '../Button/Button';
import { useAppDispatch } from '../../store';
import { logout } from '../../store/auth/authSlice';
import { ILogoutButtonProps } from './LogoutButton.props';

export const LogoutButton = ({ className, ...props }: ILogoutButtonProps): JSX.Element => {
	const dispatch = useAppDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<Button
			className={className}
			arrow={'none'}
			appearance={'ghost'}
			onClick={handleLogout}
			{...props}
		>
			Выйти
		</Button>
	);
};
