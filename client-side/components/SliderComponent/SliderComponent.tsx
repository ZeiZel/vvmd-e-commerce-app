import React, { FC } from 'react';
import { ISlideModel, ISliderProps } from './SliderComponent.props';

export const SliderComponent = ({
	slides,
	carousel,
	className,
	...props
}: ISliderProps): JSX.Element => {
	return <div>Слайдер</div>;
};
