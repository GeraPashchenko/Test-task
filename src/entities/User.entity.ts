import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export default class User {
	@PrimaryGeneratedColumn({ type: 'integer' })
	id!: number;

	@Column({ type: 'text' })
	name!: string;

	@Column({ type: 'text' })
	password!: string;
}
