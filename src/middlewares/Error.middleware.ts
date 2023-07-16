import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
	const statusCode = err.status || StatusCodes.INTERNAL_SERVER_ERROR;
	const message = err.message || 'Internal Server Error';

	console.error(err);

	res.status(statusCode).json({ error: message });
};

export default errorMiddleware;
