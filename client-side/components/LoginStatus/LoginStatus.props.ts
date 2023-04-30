import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ILoginStatusProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	image: string;
	login: string;
}
