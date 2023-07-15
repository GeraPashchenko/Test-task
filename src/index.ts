import app from "./app";
import dataSource from "./config/database/dataSource";
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.SERVER_PORT, () => {
	dataSource.initialize()
		.then(() => console.log('Connected to DB!'))
	// .catch((err) => {
	// 	console.error(`Data Source initialization error`, err);
	// });

	console.log(`The server is listened on port ${process.env.SERVER_PORT}`);
});
