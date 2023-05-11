import React, { ButtonHTMLAttributes, DetailedHTMLProps, useState } from 'react';
import { Card } from '../Card/Card';
import { LoginForm } from '../LoginForm/LoginForm';
import { RegisterForm } from '../RegisterForm/RegisterForm';
import { Button } from '../Button/Button';
import { IAuthRegister } from '../../interfaces/Auth.interface';
import { HTag } from '../HTag/HTag';
import styles from './AuthForm.module.scss';
import { Modal } from '../Modal/Modal';

const initialState: IAuthRegister = {
	login: '',
	username: '',
	password: '',
};

export interface IAuthForm
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const AuthForm = ({ className, ...props }: IAuthForm) => {
	const [formValue, setFormValue] = useState<IAuthRegister>(initialState);
	const [showRegister, setShowRegister] = useState<boolean>(false);

	const [active, setActive] = useState<boolean>(false);

	return (
		<div className={styles['auth-form__wrapper']}>
			<Modal active={active} setActive={setActive}>
				<div className={styles['auth-form__htag']}>
					<HTag tag={'h2'}>{showRegister ? 'Авторизация' : 'Регистрация'}</HTag>
				</div>
				{showRegister ? <LoginForm /> : <RegisterForm />}
				<Button
					onClick={() => setShowRegister(!showRegister)}
					arrow={'none'}
					appearance={'ghost'}
				>
					{showRegister ? 'Вы ещё не зарегистрированы?' : 'Вы уже зарегистрированы?'}
				</Button>
			</Modal>
			<Button
				className={className}
				onClick={() => setActive(!active)}
				arrow={'none'}
				appearance={'primary'}
				{...props}
			>
				Войти
			</Button>
		</div>
	);
};
