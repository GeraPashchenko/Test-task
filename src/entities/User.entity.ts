import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EncryptionHelper } from '../helpers/Encryption.helper';
import { configDotenv } from "dotenv";

configDotenv();

@Entity('users')
export default class User {
	@PrimaryGeneratedColumn({ type: 'integer' })
	id!: number;

	@Column({ type: 'text', unique: true })
	username!: string;

	@Column({ type: 'text' })
	password!: string;

	@BeforeInsert()
	async hashPassword() {
		const hashedPassword = await EncryptionHelper.encrypt(this.password, parseInt(process.env.SALT_ROUNDS || '10'));
		this.password = hashedPassword;
	}
}
