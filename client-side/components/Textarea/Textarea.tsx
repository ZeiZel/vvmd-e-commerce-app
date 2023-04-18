import React, { ForwardedRef, forwardRef } from 'react';
import { ITextareaProps } from './Textarea.props';
import cn from 'classnames';
import styles from './Textarea.module.scss';

export const Textarea = forwardRef(
	(
		{ error, className, ...props }: ITextareaProps,
		ref: ForwardedRef<HTMLTextAreaElement>,
	): JSX.Element => {
		return (
			<div className={cn(styles.textareaWrapper, className)}>
				<textarea
					className={cn({
						[styles.error]: error,
					})}
					ref={ref}
					{...props}
				></textarea>
				{error && <span className={styles.errorMessage}>{error.message}</span>}
			</div>
		);
	},
);
