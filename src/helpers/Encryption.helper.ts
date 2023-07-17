import { compareSync, hash } from "bcryptjs";

export class EncryptionHelper {
	constructor() { }

	static async encrypt(stringToEnctypt: string): Promise<string> {
		const saltRounds = parseInt(process.env.SALT_ROUNDS || '10');
		return await hash(stringToEnctypt, saltRounds);
	}

	static verifyPassword(password: string, encryptedPassword: string): boolean {
		return compareSync(password, encryptedPassword);
	}
}
