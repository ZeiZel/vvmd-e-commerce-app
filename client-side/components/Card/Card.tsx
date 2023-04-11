import React, { FC, ForwardedRef, forwardRef } from 'react';
import { ICardProps } from '@/components/Card/Card.props';
import cn from 'classnames';
import styles from './Card.module.scss';

export const Card = forwardRef(
	(
		{ children, color = 'white', className, ...props }: ICardProps,
		ref: ForwardedRef<HTMLDivElement>,
	): JSX.Element => {
		return (
			<div
				className={cn(styles.card, {
					[styles.blue]: color === 'blue',
					[styles.green]: color === 'green',
					[styles.red]: color === 'red',
				})}
				ref={ref}
				{...props}
			>
				{children}
			</div>
		);
	},
);
