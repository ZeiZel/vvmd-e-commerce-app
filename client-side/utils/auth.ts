import { makeAutoObservable } from "mobx";

export default class AuthStore {
	token: string | null = null;
	ISSERVER: boolean = true;

	constructor() {
		makeAutoObservable(this);

		this.ISSERVER = typeof window === "undefined";

		this.token = this.ISSERVER ? null : localStorage.getItem("token");
	}

	setToken(token: string) {
		this.token = token;
		this.ISSERVER || localStorage.setItem("token", token);
	}

	clearToken() {
		this.token = null;
		this.ISSERVER || localStorage.removeItem("token");
	}
}
