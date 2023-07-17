import { SignInInputDTO } from "../dtos/Auth.dto";
import { IUserRepoService, userRepoService } from "./User.repo.service";
import { IJWTService, jwtService } from "./JWT.service";
import { EncryptionHelper } from "../helpers/Encryption.helper";
import { ProjectError } from "../enums/ProjectErrors.enum";

export interface IAuthService {
	signIn(input: SignInInputDTO): Promise<string>;
}

export class AuthService {
	#UserRepoService: IUserRepoService;
	#JWTService: IJWTService;

	constructor(userRepoService: IUserRepoService, jwtService: IJWTService) {
		this.#UserRepoService = userRepoService;
		this.#JWTService = jwtService;
	}

	async signIn(input: SignInInputDTO): Promise<string> {
		const { username, password } = input;

		const userPassword = await this.#UserRepoService.getUserPassword({ username });

		if (!userPassword) throw new Error(ProjectError.USER_IS_NOT_EXISTS);

		const verifyPassword = EncryptionHelper.verifyPassword(password, userPassword)

		if (!verifyPassword) throw new Error(ProjectError.WRONG_PASSWORD);

		const token = this.#JWTService.generateToken({ username });

		return token;
	}
}

export const authService = Object.freeze(new AuthService(userRepoService, jwtService));
