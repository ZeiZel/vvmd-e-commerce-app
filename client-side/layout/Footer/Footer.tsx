import React, { FC } from 'react';
import { IFooterProps } from './Footer.props';

export const Footer: FC<IFooterProps> = ({ ...props }: IFooterProps): JSX.Element => {
	return <div {...props}>Footer</div>;
};
