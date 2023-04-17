import React, { FC } from 'react';
import { ITagProps } from './Tag.props';
import cn from 'classnames';
import { inspect } from 'util';
import style from './Tag.module.scss';

export const Tag = ({
	size = 's',
	color = 'ghost',
	children,
	href,
	className,
	...props
}: ITagProps): JSX.Element => {
	return (
		<div
			className={cn(style.tag, className, {
				[style.s]: size === 's',
				[style.m]: size === 'm',
				[style.primary]: color === 'primary',
				[style.green]: color === 'green',
				[style.ghost]: color === 'ghost',
				[style.red]: color === 'red',
				[style.gray]: color === 'gray',
			})}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};
