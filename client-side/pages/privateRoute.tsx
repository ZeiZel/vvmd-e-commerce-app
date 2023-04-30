import withAuth from '../utils/withAuth';

const ProfilePage = () => (
	<div>
		{/* Отображение только для авторизованных пользователей */}
		<h1>Профиль пользователя</h1>
	</div>
);

export default withAuth(ProfilePage);