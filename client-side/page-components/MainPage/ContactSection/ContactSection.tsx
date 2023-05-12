import React from 'react';
import styles from './ContactSection.module.scss';
import { useForm } from 'react-hook-form';
import { IContact } from '../../../interfaces/Contact.interface';
import { Input } from '../../../components/Input/Input';
import { AuthForm, Button, Card, HTag, Paragraph, Textarea } from '../../../components';
import { useSubmitContactFormDataMutation } from './contactSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactSection = () => {
	const { register, handleSubmit } = useForm<IContact>();

	const [fetchContact, { isLoading, isSuccess, isError }] = useSubmitContactFormDataMutation();

	const onSubmit = async (data: IContact) => {
		console.log(data);
		await fetchContact(data).unwrap();
	};

	if (isSuccess) {
		toast.success('Данные были успешно отправлены консультанту!');
	}

	if (isError) {
		toast.error('Данные были успешно отправлены консультанту!');
	}

	return (
		<section className={styles.contacts}>
			<div className={styles.container}>
				<div className={styles.contacts__wrapper}>
					<Card className={styles.contacts__social}>
						<Card className={styles.contacts__title}>
							<HTag tag={'h2'}>Свяжитесь с нами</HTag>
							<Paragraph>
								Это поможет нам подобрать нужный вам товар или предложить
								персональную услугу.
							</Paragraph>
						</Card>
						<form
							className={styles['contacts__form']}
							onSubmit={handleSubmit(onSubmit)}
						>
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
			</div>
			<ToastContainer />
		</section>
	);
};
