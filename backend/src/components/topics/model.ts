import { Document, Model, model, Schema } from "mongoose";

interface ITopic extends Document {
  title: string;
}

const topicSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  }
});

const Topic: Model<ITopic> = model<ITopic>("Topic", topicSchema);

export { Topic };
