import app from "./app";
import dataSource from "./config/database/dataSource";
import { configDotenv } from "dotenv";

configDotenv();

app.listen(process.env.SERVER_PORT, () => {
	dataSource.initialize()
		.then(() => console.log('Connected to DB!'))
		.then(() => console.log(`The server is listened on port ${process.env.SERVER_PORT}`));

	// .catch((err) => {
	// 	console.error(`Data Source initialization error`, err);
	// });
});
