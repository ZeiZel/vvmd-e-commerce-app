import React, { FC } from 'react';
import { ISuccessProps } from './Notification.props';
import { Card } from '@/components';

export const Notification: FC<ISuccessProps> = ({
	messageStatus,
	completeStatus,
}: ISuccessProps): JSX.Element => {
	const messageString = () => {
		switch (messageStatus) {
			case 'register':
				return 'Вы успешно зарегистрировались';
			case 'login':
				return 'Вы успешно вошли в систему';
			case 'send':
				return 'Вы успешно отправили данные';
			case 'error':
				return 'Произошла ошибка при входе';
			default:
				return 'Такой строки нет';
		}
	};

	return <Card color={completeStatus === 'Success' ? 'green' : 'red'}>{messageString()}</Card>;
};
