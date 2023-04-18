import React from 'react';
import { IRatingProps } from './Rating.props';
import cn from 'classnames';
import styles from './Rating.module.scss';

export const Rating = ({
	error,
	className,
	rating,
	setRating,
	isEditable,
	...props
}: IRatingProps): JSX.Element => {
	return <div className={cn(styles.ratingWrapper, className)}></div>;
};
