import React, { useState } from 'react';
import Image from 'next/image';
import { ILoginStatusProps } from './LoginStatus.props';
import cn from 'classnames';
import styles from './LoginStatus.module.scss';

export const LoginStatus = ({ className, ...props }: ILoginStatusProps) => {
	return <div className={cn(styles.loginStatus, className)} {...props}></div>;
};
