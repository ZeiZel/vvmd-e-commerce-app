export interface IAuthLogin {
	login: string; // email
	password: string;
}

export interface IAuthLoginResponse {
	id: string;
	user: {
		email: string;
		username: string;
		passwordHash: string;
	};
	access_token: string;
}

export interface IFindUserRequest {
	login: string;
}

export interface IFindUserResponse {
	_id: string;
	email: string;
	passwordHash: string;
	username: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
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
