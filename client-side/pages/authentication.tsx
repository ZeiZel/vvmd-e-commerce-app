import React, { useState } from 'react';
import { Login } from '@/page-components';
import { Register } from '@/page-components';
import { Button } from '../components';

const Authentication = () => {
	const [toggleRegister, setToggleRegister] = useState<boolean>(false);
	const [login, setLogin] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [loggined, setLoggined] = useState<boolean>(false);

	return (
		<div>
			{loggined && 'Вы уже авторизованы'}
			{toggleRegister ? (
				<Login setToggleRegister={() => setToggleRegister(!toggleRegister)} />
			) : (
				<Register setToggleRegister={() => setToggleRegister(!toggleRegister)} />
			)}
		</div>
	);
};

export default Authentication;
