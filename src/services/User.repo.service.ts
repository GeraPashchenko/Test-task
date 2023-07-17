import { Repository } from "typeorm";
import dataSource from "../config/database/dataSource";
import User from "../entities/User.entity";
import { GetUserDTO, UserSignUpDTO } from "../dtos/User.dto";
import { IJWTService, jwtService } from "./JWT.service";
import { IUserWithToken } from "../interfaces/User.interface";
import { ProjectError } from "../enums/ProjectErrors.enum";

export interface IUserRepoService {
	getUser(input: GetUserDTO): Promise<Omit<Omit<User, 'hashPassword'>, 'password'> | null>;
	signUp(input: UserSignUpDTO): Promise<IUserWithToken>;
	getUserPassword(input: GetUserDTO): Promise<string | undefined>;
}

export class UserRepoService implements IUserRepoService {
	#UserRepository: Repository<User>;
	#JWTService: IJWTService;

	constructor(jwtService: IJWTService) {
		this.#UserRepository = dataSource.getRepository(User);
		this.#JWTService = jwtService;
	};

	async signUp(input: UserSignUpDTO): Promise<IUserWithToken> {
		const { username, password } = input;

		const userFromDB = await this.getUser(input);

		if (userFromDB) throw new Error(ProjectError.USER_EXISTS);

		const user = new User();
		user.username = username;
		user.password = password;

		await this.#UserRepository.save(user);

		const savedUser = await this.getUser({ username });
		const generatedJWT = this.#JWTService.generateToken({ username });

		if (!savedUser) throw new Error(ProjectError.USER_IS_NOT_SAVED);

		return { ...savedUser, token: generatedJWT };
	}

	async getUser(input: GetUserDTO): Promise<Omit<Omit<User, 'hashPassword'>, 'password'> | null> {
		return await this.#UserRepository.findOne({
			where: [
				{ id: input.id },
				{ username: input.username },
			],
			select: ['id', 'username']
		});
	}

	async getUserPassword(input: GetUserDTO): Promise<string | undefined> {
		const user = await this.#UserRepository.findOne({
			where: [
				{ id: input.id },
				{ username: input.username },
			],
			select: ['password']
		});

		return user?.password;
	}
}

export const userRepoService = Object.freeze(new UserRepoService(jwtService));
