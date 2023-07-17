import { Repository, Equal } from "typeorm";
import dataSource from "../config/database/dataSource";
import Reservation from "../entities/Reservation.entity";
import { ReservationAmenityWithDurationDTO, ReservationAmenityWithDurationInputDTO } from "../dtos/Reservation.dto";

export interface IReservationRepoService {
	listByAmenityAndDate(input: ReservationAmenityWithDurationInputDTO): Promise<ReservationAmenityWithDurationDTO[]>;
	listByUserId(userId: number): Promise<Reservation[]>;
};

export class ReservationRepoService implements IReservationRepoService {
	#ReservationRepository: Repository<Reservation>;

	constructor() {
		this.#ReservationRepository = dataSource.getRepository(Reservation);
	};

	async listByAmenityAndDate(input: ReservationAmenityWithDurationInputDTO): Promise<ReservationAmenityWithDurationDTO[]> {
		const { amenity_id, date } = input;

		const reservations = await this.#ReservationRepository.find({
			relations: {
				amenity: true,
			},
			where: {
				amenity_id: Equal(amenity_id),
				date: Equal(date),
			},
			order: {
				start_time: 'ASC',
			}
		});

		return reservations.map((reservation) => ({
			id: reservation.id,
			user_id: reservation.user_id,
			start_time_hhmm: reservation.start_time_hhmm,
			duration: reservation.duration,
			amenity_name: reservation.amenity.name,
		}));
	}

	async listByUserId(user_id: number): Promise<Reservation[]> {
		const reservations = await this.#ReservationRepository.createQueryBuilder('rs')
			.select('rs.date, COUNT(rs.user_id)', 'reservations_count')
			.where('rs.user_id = :user_id', { user_id })
			.groupBy('rs.date')
			.getRawMany();

		return reservations;
	}
}

export const reservationRepoService = Object.freeze(new ReservationRepoService());
