import '../styles/globals.scss';
import { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
