import "reflect-metadata";
import express from "express";

import routes from "./routes/user.routes";
import { AppError, AppErrorHandler } from "./errors/AppError";

const app = express();

app.use(express.json());

app.use("/users", routes);

app.use(AppErrorHandler);

export default app;
