import React, { useState } from 'react';
import styles from './Login.module.scss';
import { useForm } from 'react-hook-form';
import { Button, Notification } from '../../components';

export const Login = ({ setToggleRegister }) => {
	const [logined, setLogined] = useState<boolean>(false);
	const { control, register, handleSubmit } = useForm();

	return (
		<div className={styles.wrapper}>
			{logined ? (
				<Notification messageStatus={'error'} completeStatus={'Error'} />
			) : (
				<div>
					<form className={styles.card}>
						<h2 className={styles.enter}>Вход</h2>
						<div className={styles.enter__input}>
							<label>Почта</label>
							<input className={styles.input} type='text' />
						</div>
						<div className={styles.enter__input}>
							<label>Пароль</label>
							<input className={styles.input} type='password' />
						</div>
						<div className={styles.options}>
							<p className='flex items-center'>
								<input className='mr-2' type='checkbox' /> Запомнить меня
							</p>
							<button className={styles.button}>Забыл пароль</button>
						</div>
						<Button
							onClick={() => setLogined(!logined)}
							arrow={'none'}
							appearance={'primary'}
						>
							Вход
						</Button>
					</form>
					<Button arrow={'none'} appearance={'ghost'} onClick={setToggleRegister}>
						Вы ещё не зарегистрированы?
					</Button>
				</div>
			)}
		</div>
	);
};
