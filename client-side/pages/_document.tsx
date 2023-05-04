import Document, {
	DocumentContext,
	DocumentInitialProps,
	Html,
	Main,
	Head,
	NextScript,
} from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render(): JSX.Element {
		return (
			<Html lang={'ru'}>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link rel='icon' type={'image/png'} sizes={'32x32'} href='/favicon.png' />
					<link
						href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
