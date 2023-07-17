import { jwtService } from "../services/JWT.service";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { ProjectError } from "../enums/ProjectErrors.enum";

export interface TokenizedRequest extends Request {
	token: string;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
	try {
		const token = req.header('Authorization')?.replace('Bearer ', '');

		if (!token) {
			throw new Error();
		}

		const tokenIsVerified = jwtService.verifyToken(token);

		if (tokenIsVerified) (req as TokenizedRequest).token = token;

		next();
	} catch (err) {
		res.status(StatusCodes.UNAUTHORIZED).json({ error: ProjectError.USER_IS_NOT_AUTHENTICATED });
	}
}