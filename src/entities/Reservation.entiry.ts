import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Reservation {
	@PrimaryGeneratedColumn({ type: 'integer' })
	id!: number;

	@Column({ type: 'text' })
	name!: string;

	@Column({ type: 'text' })
	password!: string;
}
