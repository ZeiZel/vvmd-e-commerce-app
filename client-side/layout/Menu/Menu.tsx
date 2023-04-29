import React, { FC } from 'react';
import { IMenuProps } from './Menu.props';

export const Menu: FC<IMenuProps> = ({ ...props }: IMenuProps): JSX.Element => {
	return <div {...props}>Menu</div>;
};
