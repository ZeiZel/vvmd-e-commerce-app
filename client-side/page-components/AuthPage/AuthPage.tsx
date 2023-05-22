import React, { useState } from 'react';
import styles from './AuthPage.module.scss';
import { Button, Card, HTag, LoginForm, RegisterForm } from '../../components';

export const AuthPage = () => {
	const [showRegister, setShowRegister] = useState<boolean>(false);

	return (
		<div className={styles['auth-form']}>
			<div className={styles['auth-form__wrapper']}>
				<Card color={'black'} className={styles['auth-form__container']}>
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
				</Card>
			</div>
		</div>
	);
};
