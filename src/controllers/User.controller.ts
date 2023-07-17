import { Request, Response } from "express";
import { IUserRepoService, userRepoService } from "../services/User.repo.service";
import { IUserWithToken } from "../interfaces/User.interface";
import { StatusCodes } from "http-status-codes";
import { ProjectError } from "../enums/ProjectErrors.enum";

export default class UserController {
	#UserRepoService: IUserRepoService;

	constructor(userRepoService: IUserRepoService) {
		this.#UserRepoService = userRepoService;
	}

	async handleSignUp(req: Request, res: Response) {
		if (!req.body) res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ error: ProjectError.MISSED_BODY });

		const { username, password } = req.body;

		if (!username || !password) res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ error: ProjectError.WRONG_INPUT_DATA });

		const signedUser: IUserWithToken = await this.#UserRepoService.signUp(req.body);
		res.json(signedUser);
	}
}

export const userController = Object.freeze(new UserController(userRepoService));
