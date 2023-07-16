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

		console.log(reservations);


		return reservations.map((reservation) => ({
			id: reservation.id,
			user_id: reservation.user_id,
			start_time_hhmm: reservation.start_time_hhmm,
			duration: reservation.duration,
			amenity_name: reservation.amenity.name,
		}));
	}

	async listByUserId(user_id: number): Promise<Reservation[]> {
		const reservations = await this.#ReservationRepository.createQueryBuilder('reservation')
			.select('*')
			.where('reservation.user_id = :userId', { user_id })
			.groupBy('reservation.date') // Group by the date column
			.getMany();

		if (!reservations)
			throw new Error('There is no reservations for this user')

		return reservations;
	}
};
