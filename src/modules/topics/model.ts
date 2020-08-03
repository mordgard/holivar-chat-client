import { createEvent, createStore, createEffect, forward } from "effector";
import { ITopic } from "types";
import api from "../../api";

// Event
export const fetchTopics = createEvent();
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

forward({
  from: fetchTopics,
  to: fetchTopicsFx,
});
