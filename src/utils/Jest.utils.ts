import { Request, Response } from "express";

export const mockResponse = () => {
	const res = {} as Response;

	res.send = jest.fn().mockReturnValue(res);
	res.status = jest.fn().mockReturnValue(res);
	res.json = jest.fn().mockReturnValue(res);

	return res
};

export const mockRequest = () => {
	const req = {} as Request;

	req.body = jest.fn().mockReturnValue(req);

	return req as Request;
};
