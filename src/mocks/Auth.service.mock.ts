import { SignInInputDTO } from "../dtos/Auth.dto";
import { ProjectError } from "../enums/ProjectErrors.enum";
import { EncryptionHelper } from "../helpers/Encryption.helper";
import { IAuthService } from "../services/Auth.service";
import { IJWTService, jwtService } from "../services/JWT.service";

export class AuthServiceMock implements IAuthService {
	#JWTService: IJWTService;
	#Token: string;

	constructor(jwtService: IJWTService) {
		this.#JWTService = jwtService;
		this.#Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
	}

	async signIn(input: SignInInputDTO & { dbUserPassword: string }): Promise<string> {
		const { username, password, dbUserPassword } = input;

		const encryptedUserPassword = await EncryptionHelper.encrypt(dbUserPassword);

		if (!encryptedUserPassword) throw new Error(ProjectError.USER_IS_NOT_EXISTS);

		const verifyPassword = EncryptionHelper.verifyPassword(password, encryptedUserPassword)

		if (!verifyPassword) throw new Error(ProjectError.WRONG_PASSWORD);

		const token = this.#JWTService.generateToken({ username });

		if (token) return this.#Token;
		return this.#Token;
	}
}

export const authServiceMock = Object.freeze(new AuthServiceMock(jwtService));
