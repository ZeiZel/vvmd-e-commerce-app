import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ISliderProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface Slide {
	id: number;
	imageUrl: string;
	caption: string;
}
