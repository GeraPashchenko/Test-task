import express from "express";

import errorMiddleware from "./middlewares/Error.middleware";

import reservationRouter from "./routers/Reservation.router";
import fileRouter from './routers/File.router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorMiddleware);

app.use('/reservation', reservationRouter);
app.use('/file', fileRouter);

export default app;
