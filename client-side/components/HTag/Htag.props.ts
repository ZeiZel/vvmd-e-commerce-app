import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ITagProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElementTagNameMap>, HTMLElementTagNameMap> {
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	children: ReactNode;
}
