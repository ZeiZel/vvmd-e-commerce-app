import React, { useState } from 'react';
import { Card } from '../Card/Card';
import { LoginForm } from '../LoginForm/LoginForm';
import { RegisterForm } from '../RegisterForm/RegisterForm';
import { Button } from '../Button/Button';
import { IAuthRegister } from '../../interfaces/Auth.interface';
import { HTag } from '../HTag/HTag';
import styles from './AuthForm.module.scss';

const initialState: IAuthRegister = {
	login: '',
	username: '',
	password: '',
};

export const AuthForm = () => {
	const [formValue, setFormValue] = useState<IAuthRegister>(initialState);
	const [showRegister, setShowRegister] = useState<boolean>(false);

	return (
		<div className={styles['auth-form__wrapper']}>
			<div className={styles['auth-form__htag']}>
				<HTag tag={'h2'}>{showRegister ? 'Авторизация' : 'Регистрация'}</HTag>
			</div>
			{showRegister ? <LoginForm /> : <RegisterForm />}
			<Button
				onClick={() => setShowRegister(!showRegister)}
				arrow={'none'}
				appearance={'ghost'}
			>
				{showRegister ? 'Вы уже зарегистрированы?' : 'Вы ещё не зарегистрированы?'}
			</Button>
		</div>
	);
};
