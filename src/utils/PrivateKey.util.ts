import { readFileSync } from "fs"

export const getPrivateKey = (): Buffer => {
	return readFileSync('private.key')
}
