import { NextFunction, Request, Response } from "express";
import { logger } from "../../utils/";
import {
  addTopicSchema,
  deleteTopicSchema,
  updateTopicSchema
} from "./schemas";

const validateTopics = {
  getTopics(req: Request, res: Response, next: NextFunction) {
    // 🤔
    next();
  },
  async addTopic(req: Request, res: Response, next: NextFunction) {
    try {
      await addTopicSchema.validate(req.body, { abortEarly: false });
      next();
    } catch (error) {
      logger.error("Validation failed: ", error);
      res.status(400).json({ error });
    }
  },
  async updateTopic(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { title } = req.body;
      await updateTopicSchema.validate({ id, title }, { abortEarly: false });
      next();
    } catch (error) {
      logger.error("Validation failed: ", error);
      res.status(400).json({ error });
    }
  },
  async deleteTopic(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await deleteTopicSchema.validate({ id }, { abortEarly: false });
      next();
    } catch (error) {
      logger.error("Validation failed: ", error);
      res.send(400).json({ error });
    }
  }
};

export { validateTopics };
