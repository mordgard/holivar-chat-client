import mongoose from "mongoose";
import { config } from "../config";
import { logger } from "../utils";

const connectToDb = async (): Promise<any> => {
  try {
    await mongoose.connect(config.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    logger.info("Connected to db");
  } catch (err) {
    logger.error("Connection to db failed", err);
  }
};

export { connectToDb };
