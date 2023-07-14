import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Amenity {
	@PrimaryGeneratedColumn({ type: 'integer' })
	id!: number;

	@Column({ type: 'integer' })
	amenity_id!: number;

	@Column({ type: 'integer' })
	user_id!: number;

	@Column({ type: 'integer' })
	start_time!: number;

	@Column({ type: 'integer' })
	end_time!: number;

	@Column({ type: 'timestamp' })
	date!: number;
}
