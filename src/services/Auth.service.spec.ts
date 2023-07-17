import { ProjectError } from "../enums/ProjectErrors.enum";
import { authServiceMock } from "../mocks/Auth.service.mock";
import { IAuthService } from "./Auth.service";

export interface SignInInputDTO {
	username: string;
	password: string;
}

let authService: IAuthService = authServiceMock;

const authInput: SignInInputDTO & { dbUserPassword: string } = {
	username: 'mocked-user',
	password: 'usrpassword',
	dbUserPassword: 'usrpassword'
}

const wrongAuthInput: SignInInputDTO & { dbUserPassword: string } = {
	...authInput,
	dbUserPassword: 'wrongusrpassword'
}

describe('Auth Service', () => {

	test('Should authenticate user', async () => {
		expect(typeof await authService.signIn(authInput)).toBe('string')
	});

	test('should not authenticate user without password', async () => {
		expect(authService.signIn(wrongAuthInput)).rejects.toThrowError(ProjectError.WRONG_PASSWORD)
	})
});
