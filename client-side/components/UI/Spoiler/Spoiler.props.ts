import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ISpoilerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	children: ReactNode;
}
