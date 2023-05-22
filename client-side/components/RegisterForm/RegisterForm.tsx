import React, { useState } from 'react';
import styles from './RegisterForm.module.scss';
import Image from 'next/image';
import { Button, Card } from '../../components';
import { useForm } from 'react-hook-form';
import { IRegisterFormProps } from './RegisterForm.props';
import { IAuthRegister } from '../../interfaces/Auth.interface';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { useRegisterMutation } from '../../store/auth/authApi';
import { Input } from '../UI/Input/Input';

export const RegisterForm = ({ className, ...props }: IRegisterFormProps) => {
	const { register, control, handleSubmit } = useForm<IAuthRegister>();

	const [showPassword, setShowPassword] = useState<boolean>(false);

	const router = useRouter();
	const [fetchRegister, { isLoading, isError, error, isSuccess }] = useRegisterMutation();

	async function onSubmit(data: IAuthRegister) {
		await fetchRegister(data).unwrap();
	}

	const toggleShowPassword = (e: Event) => {
		e.stopPropagation();
		setShowPassword(!showPassword);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles['register-form']} {...props}>
				<Input
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
				<Input
					className={styles['register-form__input']}
					type='text'
					placeholder={'почта'}
					{...register('login', {
						required: {
							value: true,
							message: 'Поле почты должно быть обязательно заполнено',
						},
					})}
				/>
				<div className={styles['register-form__input-password-wrapper']}>
					<Input
						className={cn(styles['register-form__input'])}
						type={showPassword ? 'text' : 'password'}
						placeholder={'пароль'}
						{...register('password', {
							required: {
								value: true,
								message: 'Поле пароля должно быть обязательно заполнено',
							},
						})}
					/>
					<button onClick={toggleShowPassword} className={styles['register-form__eye']}>
						{showPassword ? (
							<Image
								src={'/opened-eye.svg'}
								alt={'opened-eye'}
								width={25}
								height={25}
							/>
						) : (
							<Image
								src={'/closed-eye.svg'}
								alt={'closed-eye'}
								width={25}
								height={25}
							/>
						)}
					</button>
				</div>
				{isSuccess && (
					<Card color={'green'}>
						Вы успешно зарегистрированы! Пожалуйста, войдите в систему
					</Card>
				)}
				<Button
					arrow={'none'}
					appearance={'primary'}
					className={cn(styles['register-form__button'], {})}
				>
					Отправить
				</Button>
			</div>
		</form>
	);
};
