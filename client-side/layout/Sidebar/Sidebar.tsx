import React from 'react';
import { ISidebarProps } from '@/layout/Sidebar/Sidebar.props';

const Sidebar = ({ ...props }: ISidebarProps) => {
	return <div {...props}>Sidebar</div>;
};

export default Sidebar;
