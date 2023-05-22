import React, { ButtonHTMLAttributes, DetailedHTMLProps, useEffect, useState } from 'react';
import styles from './AuthButton.module.scss';
import { Button } from '../UI/Button/Button';
import Link from 'next/link';
import { isNotBrowser } from '../../helpers';
import { useRouter } from 'next/router';

export interface IAuthButton
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const AuthButton = ({ className, ...props }: IAuthButton): JSX.Element => {
	const [isUserLogged, setIsUserLogged] = useState<boolean>(false);

	const router = useRouter();

	useEffect(() => {
		if (isNotBrowser) return;

		setIsUserLogged((state) => !!localStorage.getItem('user-id'));
	}, []);

	const handleExit = () => {
		if (!isUserLogged) return;

		localStorage.removeItem('user-id');
		localStorage.removeItem('user');
		localStorage.removeItem('token');

		router.reload();
	};

	return (
		<div className={styles['auth-form__wrapper']}>
			<Button
				className={className}
				arrow={'none'}
				appearance={isUserLogged ? 'ghost' : 'primary'}
				onClick={handleExit}
				{...props}
			>
				{isUserLogged ? 'Выход' : <Link href={'/auth'}>Войти</Link>}
			</Button>
		</div>
	);
};
