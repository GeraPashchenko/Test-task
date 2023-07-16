import express from "express";
import errorMiddleware from "./middlewares/Error.middleware";
import router from "./routers/Reservation.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorMiddleware);

app.use('/reservation', router);

export default app;
