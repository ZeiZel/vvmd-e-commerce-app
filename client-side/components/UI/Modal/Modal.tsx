import React, { FC, ForwardedRef, forwardRef, useEffect, useRef } from 'react';
import styles from './Modal.module.scss';
import { IModalProps } from './Modal.props';
import { Card } from '../Card/Card';
import cn from 'classnames';

export const Modal = forwardRef(
	(
		{ active, setActive, children, className, ...props }: IModalProps,
		ref: ForwardedRef<HTMLDivElement>,
	) => {
		useEffect(() => {
			if (active) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}

			return () => {
				document.body.style.overflow = '';
			};
		}, [active]);

		return (
			<div
				onClick={() => setActive(false)}
				ref={ref}
				className={cn(styles.modal, {
					[styles.hide]: !active,
				})}
				{...props}
			>
				<Card
					onClick={(e) => e.stopPropagation()}
					color={'black'}
					className={cn(styles['modal__content'], className, {
						[styles.active]: active,
					})}
				>
					{children}
				</Card>
			</div>
		);
	},
);
