import express from "express";
import cors from 'cors';

import errorMiddleware from "./middlewares/Error.middleware";

import reservationRouter from "./routers/Reservation.router";
import fileRouter from './routers/File.router';
import authRouter from "./routers/Auth.router";
import userRouter from "./routers/User.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorMiddleware);

app.use('', authRouter);
app.use('/reservation', reservationRouter);
app.use('/file', fileRouter);
app.use('/user', userRouter);

app.use(cors({
	origin: ['http://localhost:80', 'http://localhost:8080', 'http://localhost:3000'],
	optionsSuccessStatus: 200,
}));


export default app;
