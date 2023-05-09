import React, { useState } from 'react';
import Image from 'next/image';
import { ILoginStatusProps } from './LoginStatus.props';
import cn from 'classnames';
import styles from './LoginStatus.module.scss';
import { Modal } from '../Modal/Modal';
import { AuthForm } from '../AuthForm/AuthForm';
import { Button } from '../Button/Button';

export const LoginStatus = ({ className, ...props }: ILoginStatusProps) => {
	const [modal, setModal] = useState<boolean>(false);
	const [showBlock, setShowBlock] = useState<boolean>(false);

	return (
		<div
			onClick={() => setShowBlock(!showBlock)}
			className={cn(styles['login-status'], className)}
			{...props}
		>
			<div
				className={cn(styles['login-status__block'], {
					[styles.show]: showBlock,
				})}
			>
				<Modal active={modal} setActive={setModal}>
					<AuthForm />
				</Modal>
				<Button onClick={() => setModal(!modal)} arrow={'none'} appearance={'primary'}>
					Авторизация
				</Button>
			</div>
		</div>
	);
};
