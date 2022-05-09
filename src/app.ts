import "reflect-metadata";
import express from "express";
import routes from "./routes/user.routes";

const app = express();

app.use(express.json());

app.get("", (req, res) => res.send("Hello, world."));

app.use("/users", routes);

export default app;
