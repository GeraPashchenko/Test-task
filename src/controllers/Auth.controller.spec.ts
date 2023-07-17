import { Request, Response } from "express";
import { mockRequest, mockResponse } from "../utils/Jest.utils";
import { SignInInputDTO } from "../dtos/Auth.dto";
import { authControllerMock } from "../mocks/Auth.controller.mock";

const authInput: SignInInputDTO & { dbUserPassword: string } = {
	username: 'mocked-user',
	password: 'usrpassword',
	dbUserPassword: 'usrpassword'
}

let req = {} as Request;
let res = {} as Response;

beforeEach(() => {
	res = mockResponse();
	req = mockRequest();
})

describe('Auth Controller', () => {
	it('Should handle sign in', async () => {
		req.body = authInput;

		await authControllerMock.handleSignIn(req, res);

		expect(res.send).toHaveBeenCalledTimes(1);
		expect(res.send).toHaveBeenCalledWith('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
	});
});
