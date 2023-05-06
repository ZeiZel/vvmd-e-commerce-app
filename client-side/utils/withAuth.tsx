import { useRouter } from 'next/router';
import { useEffect } from 'react';

function withAuth(Component: React.ComponentType) {
	return function WithAuth(props: any) {
		const router = useRouter();

		useEffect(() => {
			if (typeof window !== 'undefined' && !localStorage.token) {
				router.push('/');
			}
		}, []);

		if (typeof window !== 'undefined' && !localStorage.token) {
			// скрываем компонент, если пользователь неавторизован
			return null;
		}

		return <Component {...props} />;
	};
}

export default withAuth;
