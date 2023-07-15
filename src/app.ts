import express from "express";
import errorMiddleware from "./middlewares/Error.middleware";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorMiddleware);

export default app;
