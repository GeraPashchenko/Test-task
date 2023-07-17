import { Request, Response } from 'express';
import { IReservationRepoService, reservationRepoService } from '../services/Reservation.repo.service';
import { StatusCodes } from 'http-status-codes';
import { ProjectError } from '../enums/ProjectErrors.enum';

export class ReservationController {
	#ReservationRepoService: IReservationRepoService;

	constructor(ReservationRepoService: IReservationRepoService) {
		this.#ReservationRepoService = ReservationRepoService;
	}

	async handleListByAmenityAndDate(req: Request, res: Response) {
		if (!req.query) res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ error: ProjectError.MISSED_QUERY });

		const amenity_id = Number(req.query.amenity_id);
		const date = Number(req.query.date);

		if (isNaN(amenity_id) || isNaN(date))
			res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ error: ProjectError.WRONG_INPUT_DATA });

		const reservations = await this.#ReservationRepoService.listByAmenityAndDate({ amenity_id, date });
		res.json(reservations);
	}

	async handleListByUserId(req: Request, res: Response) {
		const user_id = Number(req.params.user_id);

		if (isNaN(user_id))
			res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ error: ProjectError.WRONG_INPUT_DATA });

		const reservations = await this.#ReservationRepoService.listByUserId(user_id);
		res.json(reservations);
	}
}

export const reservationController = Object.freeze(new ReservationController(reservationRepoService));
