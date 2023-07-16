import * as express from "express";
import ReservationController from "../controllers/Reservation.controller";
import { ReservationRepoService } from "../services/Reservation.repo.service";

const router = express.Router();
const reservationRepoService = new ReservationRepoService();
const reservationController = new ReservationController(reservationRepoService);

router.get('/listByAmenityAndDay', reservationController.handleListByAmenityAndDate.bind(reservationController));
router.get('/:user_id', reservationController.handleListByUserId.bind(reservationController));

export default router;
