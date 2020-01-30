import bodyParser from "body-parser";
import express from "express";
import { topicRoutes } from "./components/topics";
import { connectToDb } from "./database/db";

const app: express.Application = express();

connectToDb();

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1/", topicRoutes);

export { app };
