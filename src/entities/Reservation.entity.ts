import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Amenity from './Amenity.entity';

@Entity('reservations')
export default class Reservation {
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

	@Column({ type: 'bigint' })
	date!: number;

	// Booking duration in minutes
	public get duration(): number {
		if (this.end_time === 0) return 0;

		return (this.end_time - this.start_time);
	};

	// Booking start time in HH:MM format
	public get start_time_hhmm(): string {
		const dateTimestamp = typeof this.date === 'string' ? parseInt(this.date) : this.date;
		const date = new Date(dateTimestamp);

		date.setHours(0, 0, 0, 0);
		date.setMinutes(date.getMinutes() + this.start_time);

		const hours = date.getHours();
		const minutes = date.getMinutes();

		// fill gaps with '0'. For ex: 8:5 => 08:05
		return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
	}

	@OneToOne(() => Amenity)
	@JoinColumn({ name: 'amenity_id' })
	amenity!: Amenity
};
