import React, { useState, useEffect } from 'react';
import { ISliderProps, Slide } from './Slider.props';
import cn from 'classnames';
import styles from './Slider.module.scss';
import { API_PATH } from '../../api/apiService';

export const Slider = ({ className, ...props }: ISliderProps) => {
	const [slides, setSlides] = useState<Slide[]>([]);

	const fetchSlides = async () => {
		const response = await fetch(API_PATH + '/api/slides');
		const data = await response.json();
		setSlides(data.slides);
	};

	useEffect(() => {
		fetchSlides();
	}, []);

	return (
		<div className={cn(className, styles.slider)}>
			{slides.length > 0 && (
				<div className={styles['slider__container']}>
					{slides.map((slide) => (
						<div key={slide.id} className={styles['slider__item']}>
							<img src={slide.imageUrl} alt={slide.caption} />
							<div className={styles['slider__caption']}>{slide.caption}</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
