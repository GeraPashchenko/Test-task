import { Repository, Equal } from "typeorm";
import dataSource from "../Database/dataSource";
import Reservation from "../entities/Reservation.entity";
import Amenity from "../entities/Amenity.entity";

class ReservationService {
	#ReservationRepository: Repository<Reservation>;

	constructor() {
		this.#ReservationRepository = dataSource.getRepository(Reservation);
	};

	async listByAmenityAndDate(amenityId: number, date: number): Promise<Reservation[]> {
		const result = await this.#ReservationRepository.createQueryBuilder()
			.relation(Amenity, '')


		find({
			relations: ['amenities'],
			where: {
				amenity_id: Equal(amenityId),
				date: Equal(date),
			},
			select: [
				''
			]
		});

		return result;
	}

	async listByUserId(userId: number): Promise<Reservation> {
		const result = await this.#ReservationRepository.findOneBy({
			user_id: Equal(userId),
		});

		if (!result)
			throw new Error('There is no reservations for this user')

		return result;
	}
}

const singletonService = Object.freeze(new ReservationService());
export default singletonService;
