export const API_PATH = 'http://localhost:3000/api/';

export const API_ROUTE = {
	auth: 'auth/',
	payment: 'payment/',
	product: 'product/',
	shoppingCart: 'shoppingcart/',
};

export const API_FUNCTIONS = {
	auth: {
		register: 'register/',
		login: 'login/',
		findUserById: 'findUser/',
		findUserByDto: 'findUser',
	},
	payment: {
		makePayment: '',
	},
	product: {
		create: 'create/',
		addImage: 'addImg/',
		get: '',
		findByString: 'searching/search',
		delete: '',
		findAll: '',
		patch: '',
		findByCategoryWithPagination: 'category/',
	},
	shoppingCart: {
		getAll: '',
		add: '',
		updateCount: 'count/',
		updateTotalPrice: 'totalPrice/',
		deleteOne: 'one/',
		deleteAll: '',
	},
};
