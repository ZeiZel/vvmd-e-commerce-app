import React from 'react';
import { IHeaderProps } from '@/layout/Header/Header.props';

const Header = ({ ...props }: IHeaderProps) => {
	return <div {...props}>Header</div>;
};

export default Header;
