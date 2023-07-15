import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Amenity from './Amenity.entity';

@Entity('reservations')
export default class Reservation {
	@PrimaryGeneratedColumn({ type: 'integer' })
	id!: number;

	@Column({ type: 'integer' })
	amenityId!: number;

	@Column({ type: 'integer' })
	userId!: number;

	@Column({ type: 'integer' })
	startTime!: number;

	@Column({ type: 'integer' })
	endTime!: number;

	@Column({ type: 'bigint' })
	date!: number;

	// Booking duration in minutes
	public get duration(): number {
		if (this.endTime === 0) return 0;

		return (this.endTime - this.startTime);
	};

	// Booking start time in HH:MM format
	public get startTimeInHHMM(): string {
		const date = new Date(this.date);

		date.setHours(0, 0, 0, 0);
		date.setMinutes(date.getMinutes() + this.startTime);

		const hours = date.getHours();
		const minutes = date.getMinutes();

		// fill gaps with '0'. For ex: 8:5 => 08:05
		return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
	}

	@OneToOne(() => Amenity)
	@JoinColumn()
	amenity!: Amenity
};
