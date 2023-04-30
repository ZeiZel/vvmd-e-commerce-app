import { useRouter } from "next/router";
import { useEffect } from "react";
import AuthStore from "./auth";

function withAuth(Component: React.ComponentType) {
	return function WithAuth(props: any) {
		const router = useRouter();
		const authStore = new AuthStore();

		useEffect(() => {
			if (!authStore.token) {
				router.push("/login");
			}
		}, []);

		if (!authStore.token) {
			// скрываем компонент, если пользователь неавторизован
			return null;
		}

		return <Component {...props} />;
	};
}

export default withAuth;