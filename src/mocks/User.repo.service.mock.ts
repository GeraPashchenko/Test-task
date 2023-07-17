import { GetUserDTO, UserSignUpDTO } from "../dtos/User.dto";
import User from "../entities/User.entity";
import { EncryptionHelper } from "../helpers/Encryption.helper";
import { IUser, IUserWithToken } from "../interfaces/User.interface";
import { IJWTService, jwtService } from "../services/JWT.service";
import { IUserRepoService } from "../services/User.repo.service";

export class UserRepoServiceMock implements IUserRepoService {
	#User: IUser;
	#JWTService: IJWTService;

	password = 'userpassword';

	constructor(jwtService: IJWTService) {
		this.#JWTService = jwtService;
		this.#User = { id: 0, username: 'mocked-user' }
	}

	async getUser(input: GetUserDTO): Promise<Omit<Omit<User, "hashPassword">, "password"> | null> {
		return this.#User;
	}

	async getUserPassword(input: GetUserDTO): Promise<string | undefined> {
		return await EncryptionHelper.encrypt(this.password);
	}

	async signUp(input: UserSignUpDTO): Promise<IUserWithToken> {
		const token = this.#JWTService.generateToken({ username: input.username });
		return {
			...this.#User,
			token
		}
	}
}

export const userRepoServiceMock = Object.freeze(new UserRepoServiceMock(jwtService));
