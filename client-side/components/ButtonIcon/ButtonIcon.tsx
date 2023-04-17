import React from 'react';
import { IButtonIconProps, icons } from './ButtonIcon.props';
import cn from 'classnames';
import style from './ButtonIcon.module.scss';

export const ButtonIcon = ({
	appearance,
	icon,
	className,
	...props
}: IButtonIconProps): JSX.Element => {
	const IconComp = icons[icon];
	return (
		<button
			className={cn(style.button, className, {
				[style.primary]: appearance === 'primary',
				[style.black]: appearance === 'black',
			})}
			{...props}
		>
			<IconComp />
		</button>
	);
};
