export interface UserSignUpDTO {
	username: string;
	password: string;
}

export interface GetUserDTO {
	username?: string;
	id?: number;
}
