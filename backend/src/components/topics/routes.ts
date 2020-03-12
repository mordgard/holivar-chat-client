import { Router } from "express";
import { topicsService } from "./service";
import { validateTopics } from "./validator";

const router = Router();

router.get(
  "/topics",
  validateTopics.get,
  topicsService.getTopics
);

router.post(
  "/topics",
  validateTopics.add,
  topicsService.addNewTopic
);

router.put(
  "/topics/:topicId",
  validateTopics.update,
  topicsService.updateTopic
);

router.delete(
  "/topics/:topicId",
  validateTopics.delete,
  topicsService.deleteTopic
);

export { router };
