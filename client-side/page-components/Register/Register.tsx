import React from 'react';
import { Button } from '../../components';
import styles from './Register.module.scss';

export const Register = ({ setToggleRegister }) => {
	return (
		<div className={styles.wrapper}>
			<form className={styles.card}>
				<h2 className={styles.enter}>Регистрация</h2>
				<div className={styles.enter__input}>
					<label>Почта</label>
					<input className={styles.input} type='text' />
				</div>
				<div className={styles.enter__input}>
					<label>Пароль</label>
					<input className={styles.input} type='password' />
				</div>
				<Button arrow={'none'} appearance={'primary'}>
					Регистрация
				</Button>
			</form>
			<Button arrow={'none'} appearance={'ghost'} onClick={setToggleRegister}>
				Вы уже зарегистрированы?
			</Button>
		</div>
	);
};
