import mongoose from "mongoose";
import { topicSchema } from "./schemas/topicSchema";

const Topic = mongoose.model("Topic", topicSchema);

const connectToDb = async (): Promise<any> => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}${process.env.MONGO_PATH}`,
      { useNewUrlParser: true }
    );
    // tslint:disable-next-line:no-console
    console.log("Connected");
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.log("Connection to database failed", err);
  }
};

export { connectToDb };
