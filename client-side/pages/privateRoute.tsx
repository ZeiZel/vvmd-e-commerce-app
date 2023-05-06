import React from 'react';
import WithAuth from '../utils/withAuth';
import { withLayout } from '../layout/Layout';

const PrivateRoute = () => {
	return <div>Приватный роут</div>;
};

export default WithAuth(withLayout(PrivateRoute));
