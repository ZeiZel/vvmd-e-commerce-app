import React from 'react';
import cn from 'classnames';
import { IDividerProps } from './Divider.props';
import style from './Divider.module.scss';

export const Divider = ({ className, ...props }: IDividerProps): JSX.Element => {
	return <hr className={cn(className, style.hr)} {...props} />;
};
