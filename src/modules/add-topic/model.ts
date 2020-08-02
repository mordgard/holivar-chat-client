import { createEvent, createEffect, forward } from "effector";
import { ITopic } from "types";
import api from "../../api";

// Event
export const addTopic = createEvent<ITopic>();

// Effect
export const addTopicFx = createEffect("add new topic", {
  handler: async ({ title }) => {
    try {
      await api.topics.addTopic({ title });
    } catch (error) {
      console.log(error);
    }
  },
});

forward({
  from: addTopic,
  to: addTopicFx,
});
