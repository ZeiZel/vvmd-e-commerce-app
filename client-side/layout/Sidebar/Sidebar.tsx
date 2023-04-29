import React, { FC } from 'react';
import { ISidebarProps } from './Sidebar.props';

export const Sidebar: FC<ISidebarProps> = ({ ...props }: ISidebarProps): JSX.Element => {
	return <div {...props}>Sidebar</div>;
};
