import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Card } from '../../components';
import styles from './RegisterForm.module.scss';
import { useForm } from 'react-hook-form';
import { IRegisterFormProps } from './RegisterForm.props';
import { IAuthRegister } from '../../interfaces/Auth.interface';
import cn from 'classnames';
import Link from 'next/link';
import { ChangeEvent } from 'preact/compat';
import { API_FUNCTIONS, API_PATH, API_ROUTE } from '../../api/helper.api';
import AuthStore from '../../store/localStorage/localStorageSlice';
import { useRouter } from 'next/router';
import { useRegisterMutation } from '../../store/auth/authApi';
import { Input } from '../Input/Input';

export const RegisterForm = ({ className, ...props }: IRegisterFormProps) => {
	const { register, control, handleSubmit } = useForm<IAuthRegister>();

	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [applyPolicy, setApplyPolicy] = useState<boolean>(false);

	const router = useRouter();
	const [fetchRegister, { isLoading, isError, error, isSuccess }] = useRegisterMutation();

	async function onSubmit(data: IAuthRegister) {
		await fetchRegister(data).unwrap();
	}

	const toggleShowPassword = () => setShowPassword(!showPassword);
	const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
		setApplyPolicy(event.target?.checked);
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
				<label htmlFor='privacy-policy' className={styles['register-form__check']}>
					<Input
						checked={applyPolicy}
						onChange={handleCheckboxChange}
						type='checkbox'
						id={'privacy-policy'}
					/>
					<div className={styles['register-form__link']}>
						Я принимаю <Link href={'/'}>условия конфиденциальности</Link>
					</div>
				</label>
				{isSuccess && (
					<Card color={'green'}>
						Вы успешно зарегистрированы! Пожалуйста, войдите в систему
					</Card>
				)}
				<Button
					disabled={!applyPolicy}
					arrow={'none'}
					appearance={'primary'}
					className={cn(styles['register-form__button'], {
						[styles.disabled]: !applyPolicy,
					})}
				>
					Отправить
				</Button>
			</div>
		</form>
	);
};
