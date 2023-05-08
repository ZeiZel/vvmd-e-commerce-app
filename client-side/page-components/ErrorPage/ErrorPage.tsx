import React from 'react';
import { HTag } from '../../components';
import { IErrorPageProps } from './ErrorPage.props';
import styles from './ErrorPage.module.scss';

export const ErrorPage = ({ type }: IErrorPageProps): JSX.Element => {
	return (
		<div className={styles.error}>
			{type === '404' && (
				<HTag className={styles.error__answer} tag={'h1'}>
					Ошибка 404: страница не найдена
				</HTag>
			)}
			{type === '500' && (
				<HTag className={styles.error__answer} tag={'h1'}>
					Ошибка 500: страница не найдена
				</HTag>
			)}
		</div>
	);
};
