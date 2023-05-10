import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ILoginStatusProps } from './LoginStatus.props';
import cn from 'classnames';
import styles from './LoginStatus.module.scss';
import { Modal } from '../Modal/Modal';
import { AuthForm } from '../AuthForm/AuthForm';
import { Button } from '../Button/Button';
import { useAppDispatch } from '../../store';
import { logout } from '../../store/auth/authSlice';
import { HTag } from '../HTag/HTag';

export const LoginStatus = ({ className, ...props }: ILoginStatusProps) => {
	const [modal, setModal] = useState<boolean>(false);
	const [showBlock, setShowBlock] = useState<boolean>(false);

	const dispatch = useAppDispatch();

	useEffect(() => {}, []);

	if (typeof window === 'undefined') {
		return;
	}

	const user = JSON.parse(localStorage.getItem('user') as string) || '';
	const { username } = user;

	const handleLogout = () => dispatch(logout());

	const handleModal = () => {
		setModal((modal) => !modal);
		setShowBlock((showBlock) => !showBlock);
	};

	return (
		<div
			onClick={() => setShowBlock(!showBlock)}
			className={cn(styles['login-status'], className)}
			{...props}
		>
			{user}
			<div
				className={cn(styles['login-status__block'], {
					[styles.show]: showBlock,
				})}
			>
				{user ? (
					<div>
						<HTag tag={'h3'}>{user}</HTag>
						<Button onClick={handleLogout} arrow={'none'} appearance={'ghost'}>
							Выход
						</Button>
					</div>
				) : (
					<div>
						<Button onClick={handleModal} arrow={'none'} appearance={'primary'}>
							Авторизация
						</Button>
					</div>
				)}
			</div>
			{!user && (
				<Modal active={modal} setActive={setModal}>
					<AuthForm />
				</Modal>
			)}
		</div>
	);
};
