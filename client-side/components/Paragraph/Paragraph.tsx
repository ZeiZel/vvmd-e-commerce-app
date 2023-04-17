import React from 'react';
import { IParagraphProps } from './Paragraph.props';
import cn from 'classnames';
import styles from './Paragraph.module.scss';

export const Paragraph = ({ size = 's', children, className, ...props }: IParagraphProps) => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.l]: size === 'l',
			})}
			{...props}
		>
			{children}
		</p>
	);
};
