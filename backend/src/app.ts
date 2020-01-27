import bodyParser from "body-parser";
import express from "express";
import { connectToDb } from "./database/db";
import { logger } from "./utils";

import { Topic } from "./database/models/topic";

const app: express.Application = express();

connectToDb();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/topics", async (req, res) => {
  try {
    const topics = await Topic.find({});
    res.send(topics);
  } catch (err) {
    res.status(500).send(err);
    logger.error(err.message);
  }
});

app.post("/topics", async (req, res) => {
  const topic = new Topic(req.body);

  try {
    await topic.save();
    res.send(topic);
  } catch (err) {
    res.status(500).send(err);
    logger.error(err.message);
  }
});

app.delete("/topics/:id", async (req, res) => {
  try {
    const topic = await Topic.findByIdAndDelete(req.params.id);

    if (!topic) {
      res.status(404).send("Topic not found");
    }
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
    logger.error(err.message);
  }
});

app.patch("/topics/:id", async (req, res) => {
  try {
    await Topic.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
    logger.error(err.message);
  }
});

export { app };
