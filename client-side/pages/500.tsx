import React from 'react';
import { ErrorPage } from '../page-components';
import { withLayout } from '../layout/Layout';

const Error500 = () => {
	return <ErrorPage type={'500'} />;
};

export default Error500;
