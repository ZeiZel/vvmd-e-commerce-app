import React from 'react';
import { Button } from '../../components';
import styles from './RegisterForm.module.scss';
import { useForm } from 'react-hook-form';
import { IRegisterFormProps } from './RegisterForm.props';
import { IRegisterForm } from '../../interfaces/Auth.interface';

export const RegisterForm = ({ className, ...props }: IRegisterFormProps) => {
	const { register, control, handleSubmit } = useForm<IRegisterForm>();

	const onSubmit = (data: IRegisterForm) => {
		console.log(data);
	};

	return (
		<form className={styles['register-form']} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles['register-form__content']} {...props}>
				<input
					className={styles['register-form__input']}
					type='text'
					placeholder={'имя пользователя'}
					{...register('username', {
						required: {
							value: true,
							message: 'Поле имени пользователя должно быть обязательно заполнено',
						},
					})}
				/>
				<input
					className={styles['register-form__input']}
					type='text'
					placeholder={'почта'}
					{...register('email', {
						required: {
							value: true,
							message: 'Поле почты должно быть обязательно заполнено',
						},
					})}
				/>
				<input
					className={styles['register-form__input']}
					type='text'
					placeholder={'пароль'}
					{...register('password', {
						required: {
							value: true,
							message: 'Поле пароля должно быть обязательно заполнено',
						},
					})}
				/>
				<Button
					arrow={'none'}
					appearance={'primary'}
					className={styles['register-form__button']}
				>
					Отправить
				</Button>
			</div>
		</form>
	);
};
