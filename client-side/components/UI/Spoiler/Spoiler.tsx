import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Spoiler.module.scss';
import { ISpoilerProps } from './Spoiler.props';
import cn from 'classnames';
import CloseIcon from './close.svg';
import ExpandIcon from './expand.svg';

export const Spoiler = ({ children, title, className, ...props }: ISpoilerProps) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const handleToggle = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className={cn(styles.spoiler, className)}>
			<div className={styles.spoiler__header} onClick={handleToggle}>
				{title}{' '}
				{isExpanded ? (
					<span className={styles.spoiler__image}>
						<CloseIcon />
					</span>
				) : (
					<span className={styles.spoiler__image}>
						<ExpandIcon />
					</span>
				)}
			</div>
			{isExpanded && <div className={styles.spoiler__content}>{children}</div>}
		</div>
	);
};
