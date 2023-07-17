import { JwtPayload, sign, verify } from "jsonwebtoken";
import { IJWTPayload } from "../interfaces/JWT-payload.interface";
import { getPrivateKey } from "../utils/PrivateKey.util";

export interface IJWTService {
	verifyToken(token: string): boolean;
	generateToken(input: IJWTPayload): string;
	decodeToken(token: string): JwtPayload;
}

export class JWTService implements IJWTService {
	#privateKey: Buffer;

	constructor() {
		this.#privateKey = getPrivateKey();
	}

	verifyToken(token: string): boolean {
		const verifyed = verify(token, this.#privateKey);
		return verifyed ? true : false;
	}

	generateToken(input: IJWTPayload): string {
		const generatedJWT = sign({ input }, this.#privateKey);
		return generatedJWT;
	}

	decodeToken(token: string): JwtPayload {
		const decodedToken = verify(token, this.#privateKey) as JwtPayload;
		return decodedToken;
	}
}

export const jwtService = Object.freeze(new JWTService());
