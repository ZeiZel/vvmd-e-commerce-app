import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../../components';
import styles from './RegisterForm.module.scss';
import { useForm } from 'react-hook-form';
import { IRegisterFormProps } from './RegisterForm.props';
import { IRegisterForm } from '../../interfaces/Auth.interface';
import cn from 'classnames';
import Link from 'next/link';
import { ChangeEvent } from 'preact/compat';

export const RegisterForm = ({ className, ...props }: IRegisterFormProps) => {
	const { register, control, handleSubmit } = useForm<IRegisterForm>();

	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [applyPolicy, setApplyPolicy] = useState<boolean>(false);

	const toggleShowPassword = () => setShowPassword(!showPassword);
	const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
		setApplyPolicy(event.target?.checked);
	};

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
				<div className={styles['register-form__input-password-wrapper']}>
					<input
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
					<input
						checked={applyPolicy}
						onChange={handleCheckboxChange}
						type='checkbox'
						id={'privacy-policy'}
					/>
					Я принимаю{' '}
					<Link href={'/'} className={styles['register-form__link']}>
						условия конфиденциальности
					</Link>
				</label>
				<Button
					disabled={applyPolicy}
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
