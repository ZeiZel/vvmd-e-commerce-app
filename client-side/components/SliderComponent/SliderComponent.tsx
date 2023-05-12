import React, { useState } from 'react';
import Image from 'next/image';
import { ISliderProps } from './SliderComponent.props';
import styles from './SliderComponent.module.scss';
import { API_PATH_IMAGE } from '../../api/helper.api';
import { responsiveOptions } from '../../helpers';
import Carousel from 'react-multi-carousel';
import { HTag } from '../HTag/HTag';

export const SliderComponent = ({ images }: ISliderProps): JSX.Element => {
	if (!images) {
		return <HTag tag={'h2'}>Изображений нет</HTag>;
	}

	const firstImage = images[0].path;
	const [selectedImage, setSelectedImage] = useState(firstImage);

	const handleImageClick = (imagePath: string) => {
		setSelectedImage(imagePath);
	};

	return (
		<div className={styles.slider}>
			<div className={styles['slider__wrapper']}>
				<div className={styles['slider__main-image']}>
					<img src={selectedImage} alt='Selected' />
				</div>
				<Carousel
					infinite={true}
					responsive={responsiveOptions}
					className={styles.slider__carousel}
				>
					{images.map((image) => (
						<div
							key={image.path}
							onClick={() => handleImageClick(image.path)}
							className={styles['slider__carousel-item']}
						>
							<img src={image.path} alt={image.name} />
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};
