import { DataSource } from "typeorm";
import { configDotenv } from "dotenv";

configDotenv();

const dataSource = new DataSource({
	type: 'postgres',
	host: process.env.POSTGRES_HOST,
	port: parseInt(process.env.POSTGRES_PORT || '5432'),
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
	entities: ["src/entities/*.ts"],
	logging: true,
	synchronize: false,
});

export default dataSource;
