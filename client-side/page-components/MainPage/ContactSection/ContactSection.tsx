import React from 'react';
import styles from './ContactSection.module.scss';
import { ContactForm } from '../../../components';
import 'react-toastify/dist/ReactToastify.css';

export const ContactSection = () => {
	return (
		<section className={styles.contacts}>
			<div className={styles.container}>
				<div className={styles.contacts__wrapper}>
					<ContactForm />
				</div>
			</div>
		</section>
	);
};
