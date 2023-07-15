import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('amenities')
export default class Amenity {
	@PrimaryGeneratedColumn({ type: 'integer' })
	id!: number;

	@Column({ type: 'text' })
	name!: string;
}
