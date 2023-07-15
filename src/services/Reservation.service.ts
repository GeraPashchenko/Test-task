import { Repository, Equal } from "typeorm";
import dataSource from "../config/database/dataSource";
import Reservation from "../entities/Reservation.entity";
import { ReservationAmenityWithDurationDTO, ReservationAmenityWithDurationInputDTO } from "../dtos/Reservation.dto";

export interface IReservationService {
	listByAmenityAndDate(input: ReservationAmenityWithDurationInputDTO): Promise<ReservationAmenityWithDurationDTO[]>;
	listByUserId(userId: number): Promise<Reservation[]>;
};

export class ReservationService implements IReservationService {
	#ReservationRepository: Repository<Reservation>;

	constructor() {
		this.#ReservationRepository = dataSource.getRepository(Reservation);
	};

	async listByAmenityAndDate(input: ReservationAmenityWithDurationInputDTO): Promise<ReservationAmenityWithDurationDTO[]> {
		const { amenityId, date } = input;

		const reservations = await this.#ReservationRepository.find({
			relations: {
				amenity: true,
			},
			where: {
				amenityId: Equal(amenityId),
				date: Equal(date),
			},
			order: {
				startTimeInHHMM: 'ASC',
			},
			select: {
				id: true,
				userId: true,
				startTimeInHHMM: true,
				duration: true,
				amenity: {
					name: true,
				}
			},
		});

		return reservations.map((reservation) => ({
			id: reservation.id,
			userId: reservation.userId,
			startTimeInHHMM: reservation.startTimeInHHMM,
			duration: reservation.duration,
			amenityName: reservation.amenity.name,
		}));
	}

	async listByUserId(userId: number): Promise<Reservation[]> {
		const reservations = await this.#ReservationRepository.createQueryBuilder('reservation')
			.select('*')
			.where('reservation.userId = :userId', { userId })
			.groupBy('reservation.date') // Group by the date column
			.getMany();

		if (!reservations)
			throw new Error('There is no reservations for this user')

		return reservations;
	}
};
