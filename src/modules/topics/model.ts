import { createEvent, createStore, createEffect, forward } from "effector";
import { ITopic, ITopicAnswer } from "types";
import api from "../../api";

// Event
export const fetchTopics = createEvent();
export const clearTopics = createEvent();
export const addTopicAnswer = createEvent<ITopicAnswer>();

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

export const addTopicAnswerFx = createEffect("add topic answer", {
  handler: async ({ topicId, answer }) => {
    try {
      const response = await api.users.addTopicAnswer(topicId, answer);
      const topicsAnswers = response.data;
      console.log("answers", topicsAnswers);
      return topicsAnswers;
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
// @ts-ignore
export const $topicsAnswers = createStore<ITopicAnswer[]>([]).on(
  addTopicAnswerFx.doneData,
  (_, topicsAnswers) => topicsAnswers,
);

forward({
  from: fetchTopics,
  to: fetchTopicsFx,
});

forward({
  from: addTopicAnswer,
  to: addTopicAnswerFx,
});
