import dotenv from "dotenv";
import { validateEnv } from "./utils/validateEnv";

dotenv.config();

validateEnv();

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongoUri: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}${process.env.MONGO_PATH}`
};

export { config };
