import { DataSource } from "typeorm";
// import {  } from "./entities/";

require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,

  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,

  synchronize: false,
  logging: true,
  // entities: [],

  migrations: ["src/migrations/*.ts"],
});

AppDataSource.initialize()
  .then(() => console.log("DataSource running."))
  .catch(err => console.log("DataSource failed.", err));
