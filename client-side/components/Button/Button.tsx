import React, { FC } from 'react';
import { IButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button: FC<IButtonProps> = ({
	appearance = 'primary',
	children,
	arrow = 'none',
	className,
	...props
}: IButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, styles.animate, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
			})}
			{...props}
		>
			<span></span>
			{children}
			{arrow != 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.arrowDown]: arrow === 'down',
					})}
				>
					<ArrowIcon />
				</span>
			)}
			<span></span>
		</button>
	);
};
