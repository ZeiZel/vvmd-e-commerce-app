import React, { ForwardedRef, forwardRef } from 'react';
import { ICardProps } from './Card.props';
import cn from 'classnames';
import styles from './Card.module.scss';

export const Card = forwardRef<HTMLDivElement, ICardProps>(
	(
		{ children, color = 'black', className, ...props }: ICardProps,
		ref: ForwardedRef<HTMLDivElement>,
	): JSX.Element => {
		return (
			<div
				className={cn(styles.card, className, {
					[styles.blue]: color === 'blue',
					[styles.black]: color === 'black',
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
