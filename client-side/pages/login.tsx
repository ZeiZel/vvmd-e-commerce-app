import React from 'react';
import { Login, Register } from '../page-components';
import { useAppDispatch, useAppSelector } from '../store';
import { Button } from '../components';
import { toggleForms } from '../store/auth/authSlice';

const LoginPage = () => {
	const { toggleAuth } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	return (
		<>
			{toggleAuth === false ? <Login /> : <Register />}

			<Button onClick={() => dispatch(toggleForms())} arrow={'none'} appearance={'primary'}>
				{toggleAuth ? 'Вы не зарегистрированы?' : 'Вы уже зарегистрированы?'}
			</Button>
		</>
	);
};

export default LoginPage;
