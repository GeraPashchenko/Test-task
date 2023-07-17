import { ReservationAmenityWithDurationInputDTO, ReservationAmenityWithDurationDTO } from "../dtos/Reservation.dto";
import Reservation from "../entities/Reservation.entity";
import { IReservationRepoService } from "../services/Reservation.repo.service";

export class ReservationRepoServiceMock implements IReservationRepoService {
	#Reservation: Reservation = {
		id: 0,
		user_id: 0,
		amenity_id: 0,
		amenity: {
			id: 0,
			name: 'amenityMock'
		},
		date: 1689601614,
		start_time: 600,
		start_time_hhmm: "10:00",
		end_time: 630,
		duration: 30,
	};

	async listByAmenityAndDate(input: ReservationAmenityWithDurationInputDTO): Promise<ReservationAmenityWithDurationDTO[]> {
		return [{
			id: this.#Reservation.id,
			user_id: this.#Reservation.user_id,
			start_time_hhmm: this.#Reservation.start_time_hhmm,
			duration: this.#Reservation.duration,
			amenity_name: this.#Reservation.amenity.name,
		}]
	}

	async listByUserId(userId: number): Promise<Reservation[]> {
		return [this.#Reservation]
	}
}

export const reservationRepoServiceMock = Object.freeze(new ReservationRepoServiceMock());
