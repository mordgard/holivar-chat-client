import { createEvent, createStore, createEffect } from "effector";
import { ITopic } from "types";
import api from "../../api";

// Event
export const addTopic = createEvent<ITopic>();
export const clearTopics = createEvent();

// Effect
export const fetchTopicsFx = createEffect("fetch list of topics", {
  handler: async () => {
    try {
      const response = await api.topics.getTopics();
      const { data } = response;
      return data;
    } catch (error) {
      console.log(error);
    }
  },
});

// Store
// TODO fix types 👇
// @ts-ignore
export const $topics = createStore<ITopic[]>([])
  .on(fetchTopicsFx.doneData, (_, data) => data)
  .reset(clearTopics);

export const $loading = createStore<boolean>(false);
