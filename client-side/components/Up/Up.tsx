import React, { useEffect } from 'react';
import { ButtonIcon } from '../UI/ButtonIcon/ButtonIcon';
import { useAnimation, motion } from 'framer-motion';
import { useScrollY } from '../../hooks/useScrollY';
import styles from './Up.module.scss';

export const Up = () => {
	const controls = useAnimation();
	const y = useScrollY();

	useEffect(() => {
		controls.start({ opacity: y / document.body.scrollHeight });
	}, [y, controls]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<motion.div className={styles.up} animate={controls} initial={{ opacity: 0 }}>
			<ButtonIcon
				icon={'up'}
				appearance={'primary'}
				aria-label={'наверх'}
				onClick={scrollToTop}
			/>
		</motion.div>
	);
};
