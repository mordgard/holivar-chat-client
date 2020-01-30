import { Router } from "express";
import { logger } from "../../utils";
import { topicsService } from "./service";
import { validationSchema } from "./validator";

const router = Router();

router.get("/topics", async (req, res) => {
  try {
    const topics = await topicsService.getTopics();
    res.status(200).send(topics);
  } catch (error) {
    res.status(500).send(error);
    logger.error(error.message);
  }
});

router.post("/topics", async (req, res) => {
  try {
    await validationSchema.validate(req.body, {
      abortEarly: false
    });
    try {
      const title = req.body;
      const topic = await topicsService.addNewTopic(title);
      res.status(200).send(topic);
    } catch (error) {
      res.status(500).send(error);
      logger.error(error.message);
    }
  } catch (error) {
    logger.error("Validation failed: ", error);
    res.status(400).json({
      message: "Validation error",
      errors: error
    });
  }
});

router.put("/topics/:id", async (req, res) => {
  try {
    await validationSchema.validate(req.body, { abortEarly: false });
    try {
      const id = req.params.id;
      const title = req.body;
      const topic = await topicsService.updateTopic(id, title);
      res.status(200).send(topic);
    } catch (error) {
      res.status(500).send(error);
      logger.error(error.message);
    }
  } catch (error) {
    logger.error("Validation failed: ", error);
    res.status(400).json({
      message: "Validation error",
      errors: error
    });
  }
});

router.delete("/topics/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const topic = await topicsService.deleteTopic(id);
    if (!topic) {
      res.send(404).send("Topic not found");
    }
    res.status(200).send(topic);
  } catch (error) {
    res.status(500).send(error);
    logger.error(error.message);
  }
});

export { router };
