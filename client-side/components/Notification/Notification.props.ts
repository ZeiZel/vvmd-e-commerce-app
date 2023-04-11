import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ISuccessProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	messageStatus: 'register' | 'login' | 'send' | 'error';
	completeStatus: 'Success' | 'Error';
}
