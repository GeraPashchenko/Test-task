export interface IUser {
	id: number;
	username: string;
}

export interface IUserWithToken extends IUser {
	token: string;
}

export interface IUserWithPassword extends IUser {
	password: string;
}
