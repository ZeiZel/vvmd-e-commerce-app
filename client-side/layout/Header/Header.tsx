import React, { FC } from 'react';
import { IHeaderProps } from './Header.props';

export const Header: FC<IHeaderProps> = ({ ...props }: IHeaderProps): JSX.Element => {
	return <div {...props}>Header</div>;
};
