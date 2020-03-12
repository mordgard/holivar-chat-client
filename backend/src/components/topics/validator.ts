import { NextFunction, Request, Response } from "express";
import {
  addTopicSchema,
  deleteTopicSchema,
  updateTopicSchema
} from "./schemas";

const validateTopics = {
  get(req: Request, res: Response, next: NextFunction) {
    // 🤔
    next();
  },
  async add(req: Request, res: Response, next: NextFunction) {
    try {
      const { title } = req.body;
      await addTopicSchema.validate({ title }, { abortEarly: false });
      next();
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { topicId } = req.params;
      const { title } = req.body;
      await updateTopicSchema.validate({ topicId, title }, { abortEarly: false });
      next();
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { topicId } = req.params;
      await deleteTopicSchema.validate({ topicId }, { abortEarly: false });
      next();
    } catch (error) {
      res.send(400).json({ error });
    }
  }
};

export { validateTopics };
