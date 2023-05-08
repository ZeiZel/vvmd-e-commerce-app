import React, { useState } from 'react';
import Image from 'next/image';
import { ISliderProps } from './SliderComponent.props';
import styles from './SliderComponent.module.scss';
import { API_PATH_IMAGE } from '../../api/apiService';

export const SliderComponent = ({ slides }: ISliderProps): JSX.Element => {
	const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

	const handlePrevSlide = () => {
		setActiveSlideIndex((currentIndex) =>
			currentIndex === 0 ? slides.length - 1 : currentIndex - 1,
		);
	};

	const handleNextSlide = () => {
		setActiveSlideIndex((currentIndex) =>
			currentIndex === slides.length - 1 ? 0 : currentIndex + 1,
		);
	};

	const handleSlideClick = (index: number) => {
		setActiveSlideIndex(index);
	};

	return (
		<div className='slider-container'>
			<div className='slides'>
				{slides.map((slide, index) => (
					<div
						key={slide.name}
						className={`slide ${index === activeSlideIndex ? 'active' : ''}`}
						onClick={() => handleSlideClick(index)}
					>
						<Image
							src={API_PATH_IMAGE + slide.path.replace('/uploads', '')}
							alt={slide.path}
							width={700}
							height={400}
						/>
					</div>
				))}
			</div>
			<div className='slide-controls'>
				<button onClick={handlePrevSlide}>{'<'}</button>
				<button onClick={handleNextSlide}>{'>'}</button>
			</div>
			<div className='thumbnails'>
				{slides.map((slide, index) => (
					<div
						key={slide.name}
						className={`thumbnail ${index === activeSlideIndex ? 'active' : ''}`}
						onClick={() => handleSlideClick(index)}
					>
						<Image
							src={API_PATH_IMAGE + slide.path.replace('/uploads', '')}
							alt={slide.path}
							width={100}
							height={60}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
