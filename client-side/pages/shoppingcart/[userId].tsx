import React from 'react';
import withAuth from '../../utils/withAuth';
import { withLayout } from '../../layout/Layout';
import { ShoppingCartPage } from '../../page-components';

const ShoppingCart = () => {
	return <ShoppingCartPage />;
};

export default withAuth(withLayout(ShoppingCart));
