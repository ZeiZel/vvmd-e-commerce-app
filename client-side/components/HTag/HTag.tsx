import React, { FC } from 'react';
import { ITagProps } from './Htag.props';
import styles from './Htag.module.scss';

export const HTag: FC<ITagProps> = ({ tag, children }: ITagProps): JSX.Element => {
	return (
		<>
			{tag === 'h1' && <h1 className={styles.h1}>{children}</h1>}
			{tag === 'h2' && <h2 className={styles.h2}>{children}</h2>}
			{tag === 'h3' && <h3 className={styles.h3}>{children}</h3>}
			{tag === 'h4' && <h4>{children}</h4>}
			{tag === 'h5' && <h5>{children}</h5>}
			{tag === 'h6' && <h6>{children}</h6>}
		</>
	);
};
