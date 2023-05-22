import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ITagProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	size?: 's' | 'm';
	href?: string;
	color?: 'ghost' | 'gray' | 'green' | 'primary' | 'red';
}
