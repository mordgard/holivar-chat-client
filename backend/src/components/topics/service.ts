import { Request, Response } from "express";
import { logger } from "../../utils";
import { Topic } from "./model";

const topicsService = {
  async getTopics(req: Request, res: Response) {
    try {
      const topics = await Topic.find({});
      logger.info(topics);
      res.status(200).send(topics);
    } catch (error) {
      res.status(500).send(error);
      logger.error(error.message);
    }
  },
  async addNewTopic(req: Request, res: Response) {
    try {
      const { title } = req.body;
      const topic = new Topic({ title });
      await topic.save();
      res.status(200).send(topic);
    } catch (error) {
      res.status(500).send(error);
      logger.error(error.message);
    }
  },
  async updateTopic(req: Request, res: Response) {
    try {
      const { topicId } = req.params;
      const { title } = req.body;
      const topic = await Topic.findByIdAndUpdate(topicId, { title });
      if (topic) {
        res.status(200).send(topic);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      res.status(500).send(error);
      logger.error(error.message);
    }
  },
  async deleteTopic(req: Request, res: Response) {
    try {
      const { topicId } = req.params;
      const topic = await Topic.findByIdAndDelete(topicId);
      if (topic) {
        res.status(200).send(topic);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      res.status(500).send(error);
      logger.error(error.message);
    }
  }
};

export { topicsService };
