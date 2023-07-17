import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { IAuthService, authService } from "../services/Auth.service";
import { ProjectError } from "../enums/ProjectErrors.enum";

export class AuthController {
	#AuthService: IAuthService;

	constructor(authService: IAuthService) {
		this.#AuthService = authService;
	}

	async handleSignIn(req: Request, res: Response) {
		if (!req.body) res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ error: ProjectError.MISSED_BODY });

		const { username, password } = req.body;

		if (!username || !password) res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ error: ProjectError.WRONG_INPUT_DATA });

		const signedInUserToken = await this.#AuthService.signIn(req.body)
		res.json({ token: signedInUserToken });
	}
}

export const authController = Object.freeze(new AuthController(authService));
