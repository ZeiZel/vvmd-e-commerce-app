import React from 'react';
import styles from './ContactForm.module.scss';
import { Card } from '../UI/Card/Card';
import { HTag } from '../UI/HTag/HTag';
import { Paragraph } from '../UI/Paragraph/Paragraph';
import { Input } from '../UI/Input/Input';
import { Textarea } from '../UI/Textarea/Textarea';
import { Button } from '../UI/Button/Button';
import { useForm } from 'react-hook-form';
import { IContact } from '../../interfaces/Contact.interface';
import { useSubmitContactFormDataMutation } from '../../page-components/MainPage/ContactSection/contactSlice';
import { toast } from 'react-toastify';

export const ContactForm = () => {
	const { register, handleSubmit } = useForm<IContact>();

	const [fetchContact, { isLoading, isSuccess, isError }] = useSubmitContactFormDataMutation();

	const onSubmit = async (data: IContact) => {
		console.log(data);
		await fetchContact(data).unwrap();
	};

	if (isSuccess) {
		toast('Данные были успешно отправлены консультанту!');
	}

	if (isError) {
		toast('Данные были успешно отправлены консультанту!');
	}

	return (
		<div className={styles.contacts}>
			<Card className={styles.contacts__social}>
				<Card className={styles.contacts__title}>
					<HTag tag={'h2'}>Свяжитесь с нами</HTag>
					<Paragraph>
						Это поможет нам подобрать нужный вам товар или предложить персональную
						услугу.
					</Paragraph>
				</Card>
				<form className={styles['contacts__form']} onSubmit={handleSubmit(onSubmit)}>
					<div className={styles['contacts__form-inputs']}>
						<span>
							<label>Ваше имя</label>
							<Input
								placeholder={'имя...'}
								{...register('name', {
									required: {
										value: true,
										message: 'введите своё имя',
									},
								})}
							/>
						</span>

						<span>
							<label>Ваше имя</label>
							<Input
								placeholder={'фамилия...'}
								{...register('surname', {
									required: {
										value: true,
										message: 'введите своё имя',
									},
								})}
							/>
						</span>

						<span>
							<label>Номер для связи</label>
							<Input
								placeholder={'номер...'}
								{...register('phoneNumber', {
									required: {
										value: true,
										message: 'введите свой номер телефона',
									},
								})}
							/>
						</span>

						<span>
							<label>Почта для связи</label>
							<Input
								placeholder={'почта...'}
								{...register('email', {
									required: {
										value: true,
										message: 'введите свою почту',
									},
								})}
							/>
						</span>
					</div>

					<span>
						<label>Сообщение</label>
						<Textarea
							placeholder={'почта...'}
							{...register('email', {
								required: {
									value: true,
									message: 'введите свою почту',
								},
							})}
						/>
					</span>
					<Button arrow={'none'} appearance={'primary'}>
						<span>Отправить</span>
					</Button>
				</form>
			</Card>
		</div>
	);
};
