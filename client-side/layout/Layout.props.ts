import { ReactNode, RefAttributes } from 'react';
import { ToastContainerProps } from 'react-toastify';

export interface ILayoutProps {
	children: ReactNode;
}

export interface IToastWrapper extends ToastContainerProps {
	children: ReactNode;
}
