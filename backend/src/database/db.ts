import mongoose from "mongoose";
import { logger } from "../utils";

const connectToDb = async (): Promise<any> => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}${process.env.MONGO_PATH}`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    logger.info("Connected to db");
  } catch (err) {
    logger.error("Connection to db failed", err);
  }
};

export { connectToDb };
