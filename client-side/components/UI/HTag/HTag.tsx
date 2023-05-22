import React, { FC } from 'react';
import { ITagProps } from './Htag.props';
import styles from './Htag.module.scss';
import cn from 'classnames';

export const HTag: FC<ITagProps> = ({ tag, children, className }: ITagProps): JSX.Element => {
	return (
		<>
			{tag === 'h1' && <h1 className={cn(styles.h1, className)}>{children}</h1>}
			{tag === 'h2' && <h2 className={cn(styles.h2, className)}>{children}</h2>}
			{tag === 'h3' && <h3 className={cn(styles.h3, className)}>{children}</h3>}
			{tag === 'h4' && <h4>{children}</h4>}
			{tag === 'h5' && <h5>{children}</h5>}
			{tag === 'h6' && <h6>{children}</h6>}
		</>
	);
};
