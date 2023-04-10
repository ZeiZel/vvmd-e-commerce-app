import { Inter } from 'next/font/google';
import Button from '@/components/Button/Button';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div>
			<Button arrow={'right'} appearance={'primary'}>
				Текст
			</Button>
		</div>
	);
}
