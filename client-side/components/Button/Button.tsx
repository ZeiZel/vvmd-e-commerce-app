import React from 'react';
import { IButtonProps } from '@/components/Button/Button.props';
import cn from 'classnames';
import { motion } from 'framer-motion';
import styles from './Button.module.scss';
import ArrowIcon from './Arrow.svg';

const Button = ({ children, className, appearance, arrow = 'none', ...props }: IButtonProps) => {
	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			className={cn(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
			})}
			{...props}
		>
			{children}
			{arrow != 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrow === 'down',
					})}
				>
					<ArrowIcon />
				</span>
			)}
		</motion.button>
	);
};

export default Button;
