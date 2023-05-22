import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (type: 'success' | 'error', message: string) => {
	switch (type) {
		case 'success':
			toast.success(message);
			return;
		case 'error':
			toast.error(message);
			return;
	}
};
