import { createEvent, createStore, createEffect } from "effector";
import { ITopic } from "types";
import api from "../../api";

// Event
export const addTopic = createEvent<ITopic>();
export const clearTopics = createEvent();

// Effect
export const fetchTopicsFx = createEffect("fetch list of topics", {
  handler: () => api.topics.getTopics(),
});

// Store
// @ts-ignore
// TODO fix types 👇
export const $topics = createStore<ITopic[]>([])
  .on(fetchTopicsFx.doneData, (_, { data }) => data)
  .reset(clearTopics);

export const $loading = createStore<boolean>(false);
