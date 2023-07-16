import { Request, Response } from 'express';
import { IReservationRepoService } from '../services/Reservation.repo.service';
import { StatusCodes } from 'http-status-codes';

export default class ReservationController {
	private reservationRepoService: IReservationRepoService;

	constructor(ReservationRepoService: IReservationRepoService) {
		this.reservationRepoService = ReservationRepoService;
	}

	async handleListByAmenityAndDate(req: Request, res: Response) {
		const amenity_id = Number(req.query.amenity_id);
		const date = Number(req.query.date);

		if (isNaN(amenity_id)) {
			res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ error: 'Invalid amenity Id' });
		}

		if (isNaN(date)) {
			res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ error: 'Invalid date' });
		}

		const reservations = await this.reservationRepoService.listByAmenityAndDate({ amenity_id, date });
		res.json(reservations);
	}

	async handleListByUserId(req: Request, res: Response) {
		const user_id = Number(req.params.user_id);

		if (isNaN(user_id)) {
			res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ error: 'Invalid user Id' });
		}

		const reservations = await this.reservationRepoService.listByUserId(user_id);
		res.json(reservations);
	}
}
