import styles from './Spinner.module.scss';

export const Spinner = () => {
	return (
		<div className={styles['lds-ring']}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
