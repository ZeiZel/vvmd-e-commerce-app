import React, { useState } from 'react';
import { Card } from '../Card/Card';
import { LoginForm } from '../LoginForm/LoginForm';
import { RegisterForm } from '../RegisterForm/RegisterForm';
import { Button } from '../Button/Button';
import { IRegisterForm } from '../../interfaces/Auth.interface';
import { HTag } from '../HTag/HTag';
import styles from './AuthForm.module.scss';

const initialState: IRegisterForm = {
	email: '',
	username: '',
	password: '',
};

export const AuthForm = () => {
	const [formValue, setFormValue] = useState<IRegisterForm>(initialState);
	const [showRegister, setShowRegister] = useState<boolean>(false);

	return (
		<div className={styles['auth-form__wrapper']}>
			<div className={styles['auth-form__htag']}>
				<HTag tag={'h2'}>{showRegister ? 'Авторизация' : 'Регистрация'}</HTag>
			</div>
			{showRegister ? <LoginForm /> : <RegisterForm />}
		</div>
	);
};
