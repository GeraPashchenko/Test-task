import { ReservationAmenityWithDurationDTO, ReservationAmenityWithDurationInputDTO } from '../dtos/Reservation.dto';
import Reservation from '../entities/Reservation.entity';
import { IReservationService } from '../services/Reservation.service';

export interface IReservationController {
	handleListByAmenityAndDate(input: ReservationAmenityWithDurationInputDTO): Promise<ReservationAmenityWithDurationDTO[]>
	handleListByUserId(userId: number): Promise<Reservation[]>
};

class ReservationController implements IReservationController {
	#reservationService: IReservationService;

	constructor(ReservationService: IReservationService) {
		this.#reservationService = ReservationService;
	}

	async handleListByAmenityAndDate(input: ReservationAmenityWithDurationInputDTO): Promise<ReservationAmenityWithDurationDTO[]> {
		const reservations = await this.#reservationService.listByAmenityAndDate(input);
		return reservations;
	}

	async handleListByUserId(userId: number): Promise<Reservation[]> {
		const reservations = await this.#reservationService.listByUserId(userId);
		return reservations;
	}
};
