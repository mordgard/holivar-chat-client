import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";

import { connectToDb } from "./database/db";
import { logger, validateEnv } from "./utils";

validateEnv();
dotenv.config();

const { SERVER_PORT } = process.env;
const PORT = SERVER_PORT || 8080;
const app: express.Application = express();

connectToDb();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  logger.info(`Server started at localhost:${PORT}`);
});
