import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import AuthStore from '../../utils/auth';
import styles from './LoginForm.module.scss';
import { API_PATH } from '../../api/apiService';

export const LoginForm: FC = (): JSX.Element => {
	const router = useRouter();
	const authStore = new AuthStore();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const response = await fetch(API_PATH + '/api/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ login: email, password }),
		});

		const { access_token } = await response.json();

		if (access_token) {
			authStore.setToken(access_token);
			router.push('/');
		} else {
			console.error(`Login failed ${access_token}`);
		}
	}

	return (
		<form className={styles.wrapper} onSubmit={handleSubmit}>
			<div>
				<label htmlFor='username'>Email</label>
				<input
					type='text'
					name='username'
					value={email}
					onChange={(event) => setEmail(event.target.value)}
				/>
			</div>
			<div>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>
			</div>
			<button type='submit'>Login</button>
		</form>
	);
};
