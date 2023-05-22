import '../styles/globals.scss';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
			<ToastContainer />
		</Provider>
	);
}
