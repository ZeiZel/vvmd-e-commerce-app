import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ISliderProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	slides: ISlideModel[];
	carousel?: ISlideModel[];
}

export interface ISlideModel {
	img: string;
	medal: string;
	title: string;
	description: string;
}
