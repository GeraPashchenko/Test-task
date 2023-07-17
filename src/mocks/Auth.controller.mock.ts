import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ProjectError } from "../enums/ProjectErrors.enum";
import { IAuthService } from "../services/Auth.service";
import { authServiceMock } from "./Auth.service.mock";

export class AuthControllerMock {
	#AuthService: IAuthService;

	constructor(authService: IAuthService) {
		this.#AuthService = authService;
	}

	async handleSignIn(req: Request, res: Response) {
		if (!req.body) res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ error: ProjectError.MISSED_BODY });

		const { username, password } = req.body;

		if (!username || !password) res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ error: ProjectError.WRONG_INPUT_DATA });

		const signedInUserToken = await this.#AuthService.signIn(req.body);
		res.send(signedInUserToken);
	}
}

export const authControllerMock = Object.freeze(new AuthControllerMock(authServiceMock));
