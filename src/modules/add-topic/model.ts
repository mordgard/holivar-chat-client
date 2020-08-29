import { createEvent, createEffect, forward } from "effector";
import { ITopic } from "types";
import api from "../../api";
import { fetchTopics } from "../topics";

// Event
export const addTopic = createEvent<Partial<ITopic>>();

// Effect
export const addTopicFx = createEffect("add new topic", {
  handler: async ({ title }: Partial<ITopic>) => {
    try {
      await api.topics.addTopic({ title });
    } catch (error) {
      console.log(error);
    }
  },
});

addTopicFx.doneData.watch(() => {
  fetchTopics();
});

forward({
  from: addTopic,
  to: addTopicFx,
});
