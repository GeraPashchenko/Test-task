import { compareSync, hash } from "bcryptjs";

export class EncryptionHelper {
	constructor() { }

	static async encrypt(stringToEnctypt: string, saltRounds: number): Promise<string> {
		return await hash(stringToEnctypt, saltRounds);
	}

	static verifyPassword(password: string, encryptedPassword: string): boolean {
		return compareSync(password, encryptedPassword);
	}
}
