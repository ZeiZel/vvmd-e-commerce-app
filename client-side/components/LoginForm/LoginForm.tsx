import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { setToken } from '../../store/localStorage/localStorageSlice';
import styles from './LoginForm.module.scss';
import { useLoginMutation } from '../../store/auth/authApi';
import { useForm } from 'react-hook-form';
import { ILoginForm } from '../../interfaces/Auth.interface';
import { Spinner } from '../UI/Spinner/Spinner';
import { useAppDispatch } from '../../store';
import { HTag } from '../UI/HTag/HTag';
import cn from 'classnames';
import Image from 'next/image';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import { Card } from '../UI/Card/Card';
import { setUser } from '../../store/auth/authSlice';

export const LoginForm: FC = (): JSX.Element => {
	const { register, handleSubmit } = useForm<ILoginForm>();
	const router = useRouter();
	const dispatch = useAppDispatch();

	const [showPassword, setShowPassword] = useState<boolean>(false);

	const [fetchLogin, { error, isLoading }] = useLoginMutation();

	const toggleShowPassword = (e: Event) => {
		e.preventDefault();
		setShowPassword(!showPassword);
	};

	async function onSubmit(data: ILoginForm) {
		const responseData = await fetchLogin(data).unwrap();

		if (responseData.access_token) {
			dispatch(setToken(responseData.access_token));
			dispatch(setUser({ ...responseData }));

			await router.push('/');

			return <Card color={'green'}>Вы успешно вошли!</Card>;
		}
	}

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles['auth-form']}>
				<Input
					className={styles['auth-form__input']}
					type='text'
					placeholder={'почта'}
					{...register('login', {
						required: {
							value: true,
							message: 'Поле почты должно быть обязательно заполнено',
						},
					})}
				/>
				<div className={styles['auth-form__input-password-wrapper']}>
					<Input
						className={cn(styles['auth-form__input'])}
						type={showPassword ? 'text' : 'password'}
						placeholder={'пароль'}
						{...register('password', {
							required: {
								value: true,
								message: 'Поле пароля должно быть обязательно заполнено',
							},
						})}
					/>
					<button onClick={toggleShowPassword} className={styles['auth-form__eye']}>
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
				<Button
					arrow={'none'}
					appearance={'primary'}
					className={cn(styles['auth-form__button'])}
				>
					Отправить
				</Button>
				{error && (
					<HTag tag={'h2'}>Вход не был выполнен. Пожалуйста, повторите позже.</HTag>
				)}
			</div>
		</form>
	);
};
