import React, { useState } from 'react';
import Image from 'next/image';
import { ILoginStatusProps } from './LoginStatus.props';
import cn from 'classnames';
import styles from './LoginStatus.module.scss';

export const LoginStatus = ({ login, image, className, ...props }: ILoginStatusProps) => {
	const [showAccountForm, setShowAccountForm] = useState<boolean>(false);

	const onClick = () => setShowAccountForm((state) => !state);

	return (
		<div className={cn(styles.loginStatus, className)} {...props}>
			<div className={styles['loginStatus__image']} onClick={onClick}>
				<Image src={image} alt={'logo'} width={50} height={50} />
			</div>
			{showAccountForm && <div className={styles['loginStatus__block']}>{login}</div>}
		</div>
	);
};
