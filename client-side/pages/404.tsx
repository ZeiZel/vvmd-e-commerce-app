import React from 'react';
import { ErrorPage } from '../page-components';
import { withLayout } from '../layout/Layout';

const Error404 = () => {
	return <ErrorPage type={'404'} />;
};

export default Error404;
