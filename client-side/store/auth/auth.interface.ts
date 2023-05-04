export interface IAuthLogin {
	username: string;
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

export interface IAuthRegister {
	username: string;
	login: string; // email
	password: string;
}

export interface IInitialState {
	toggleAuth: boolean;
}
