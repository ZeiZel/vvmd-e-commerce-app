import { useState, useEffect } from 'react';
import HeaderImage from '../../../public/medal-main-slider.png';
import BgImage from '../../../public/bg-main-slider.png';
import { Button, HTag, Paragraph, Tag } from '../../../components';
import Link from 'next/link';
import Image from 'next/image';
import styles from './BannerSection.module.scss';
import cn from 'classnames';

export const BannerSection = () => {
	const [loopNum, setLoopNum] = useState<number>(0);
	const [isDeleting, setIsDeleting] = useState<boolean>(false);
	const [text, setText] = useState<string>('');
	const [delta, setDelta] = useState<number>(300 - Math.random() * 100);

	const toRotate = ['Танк ИС-42', 'КОНФРОНТАЦИЯ', 'CONFRONTATION'];

	const period = 1000;

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevState) => prevState / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setDelta(period);
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(500);
		}
	};

	useEffect(() => {
		const ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text, delta, tick]);

	return (
		<section className={styles.banner}>
			<div className={cn(styles.banner__wrapper)}>
				<div className={styles.container}>
					<div className={styles.banner__title}>
						<Tag className={styles.banner__tagline}>Танк ИС-42</Tag>
						<HTag tag={'h1'}>
							Серия{' '}
							<span className={styles['banner__text-rotate']}>
								<span className={styles['wrap']}>{text}</span>
							</span>
						</HTag>
						<Paragraph>
							КОНФРОНТАЦИЯ – уникальный дизайн коллекционной серии монет с высоким
							рельефом.
						</Paragraph>
						<Button arrow={'right'} appearance={'primary'}>
							<Link href={'/'}>Смотреть подробнее</Link>
						</Button>
					</div>
					<div className={styles.banner__image}>
						<Image src={HeaderImage} alt={'medal'} width={500} height={500} />
					</div>
				</div>
			</div>
		</section>
	);
};
