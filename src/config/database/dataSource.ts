import { DataSource } from "typeorm";
// import dotenv from "dotenv";

// dotenv.config();

const dataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 3306,
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
	entities: ["src/entities/*.ts"],
	logging: true,
	synchronize: false,
});

export default dataSource;
