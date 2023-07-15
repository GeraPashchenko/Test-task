import { Request, Response, NextFunction } from "express";

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
	const statusCode = err.status || 500;
	const message = err.message || 'Internal Server Error';

	console.error(err);

	res.status(statusCode).json({ error: message });
};

export default errorMiddleware;
