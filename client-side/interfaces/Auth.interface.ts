export interface IAuthLogin {
	login: string; // email
	password: string;
}

export interface IAuthLoginResponse {
	user: {
		login: string;
		username: string;
		passwordHash: string;
	};
	access_token: string;
}

export interface IAuthRegisterResponse {
	_id: string;
	email: string;
	passwordHash: string;
	username: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}

export interface IAuthRegister {
	username: string;
	login: string; // email
	password: string;
}

export interface ILoginForm {
	login: string;
	password: string;
}
