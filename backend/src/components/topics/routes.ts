import { Request, Response, Router } from "express";
import { logger } from "../../utils";
import { topicsService } from "./service";
import { validateTopics } from "./validator";

const router = Router();

router.get(
  "/topics",
  validateTopics.getTopics,
  async (req: Request, res: Response) => {
    try {
      const topics = await topicsService.getTopics();
      logger.info(topics);
      res.status(200).send(topics);
    } catch (error) {
      res.status(500).send(error);
      logger.error(error.message);
    }
  }
);

router.post(
  "/topics",
  validateTopics.addTopic,
  async (req: Request, res: Response) => {
    try {
      const { title } = req.body;
      const topic = await topicsService.addNewTopic(title);
      res.status(200).send(topic);
    } catch (error) {
      res.status(500).send(error);
      logger.error(error.message);
    }
  }
);

router.put(
  "/topics/:id",
  validateTopics.updateTopic,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { title } = req.body;
      const topic = await topicsService.updateTopic(id, title);
      if (topic) {
        res.status(200).send(topic);
      }
      res.sendStatus(404);
    } catch (error) {
      res.status(500).send(error);
      logger.error(error.message);
    }
  }
);

router.delete(
  "/topics/:id",
  validateTopics.deleteTopic,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const topic = await topicsService.deleteTopic(id);
      if (topic) {
        res.status(200).send(topic);
      }
      res.sendStatus(404);
    } catch (error) {
      res.status(500).send(error);
      logger.error(error.message);
    }
  }
);

export { router };
