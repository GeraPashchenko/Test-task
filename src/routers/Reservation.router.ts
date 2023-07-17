import * as express from "express";
import { reservationController } from "../controllers/Reservation.controller";

const router = express.Router();

router.get('/list-by-amenity-and-day', reservationController.handleListByAmenityAndDate.bind(reservationController));
router.get('/:user_id', reservationController.handleListByUserId.bind(reservationController));

export default router;
