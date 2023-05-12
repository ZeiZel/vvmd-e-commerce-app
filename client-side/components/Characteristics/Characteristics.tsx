import React from 'react';
import { ICharacteristicsProps } from './Characteristics.props';
import styles from './Characteristics.module.scss';

export const Characteristics = ({ characteristics }: ICharacteristicsProps): JSX.Element => {
	return (
		<>
			{characteristics.map((characteristic) => (
				<div key={characteristic.name} className={styles.advantage}>
					<span className={styles.title}>{characteristic.name}</span>
					<hr className={styles.vline} />
					<span>{characteristic.value}</span>
				</div>
			))}
		</>
	);
};
