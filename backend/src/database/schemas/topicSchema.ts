import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  title: String
});

export { topicSchema };
