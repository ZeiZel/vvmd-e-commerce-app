import { FC, useState } from 'react';
import styles from './Tabs.module.scss';
import { IProps } from './Tabs.props';
import cn from 'classnames';

export const TabComponent: FC<IProps> = ({ tabs }: IProps): JSX.Element => {
	const [activeTabIndex, setActiveTabIndex] = useState(0);

	const handleTabClick = (index: number) => {
		setActiveTabIndex(index);
	};

	return (
		<div className={styles.container}>
			<ul className={styles['tab-list']}>
				{tabs.map((tab, index) => (
					<li className={cn(styles['tab-list__item'], {
						[styles.light]: index === activeTabIndex,
						[styles.dark]: index !== activeTabIndex,
					})}
					    key={index}
					    onClick={() => handleTabClick(index)}
					>
						{tab.title}
					</li>
				))}
			</ul>
			<div className={styles['tab-list__content']}>{tabs[activeTabIndex].content}</div>
		</div>
	);
};
