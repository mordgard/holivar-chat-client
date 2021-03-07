import { AxiosInstance } from "axios";
import { Api } from "./types";

const PREFIX = "/api/v1";

const apiService = (api: AxiosInstance): Api => ({
  topics: {
    getTopics: () => api.get(`${PREFIX}/topics`),
    addTopic: data => api.post(`${PREFIX}/topics`, data),
    deleteTopic: topicId => api.delete(`${PREFIX}/topics/${topicId}`),
    updateTopic: (topicId, data) => api.put(`${PREFIX}/topics/${topicId}`, data),
  },
  auth: {
    login: ({ email, password }) => api.post(`${PREFIX}/login`, { email, password }),
    signUp: ({ email, password }) => api.post(`${PREFIX}/users`, { email, password }),
  },
  users: {
    getUsers: () => api.get(`${PREFIX}/users/`),
    getAnswers: () => api.get(`${PREFIX}/users/topic-answers`),
    addTopicAnswer: (topicId, answer) => api.post(`${PREFIX}/users/topic-answer`, { topicId, answer }),
  },
});

export { apiService };
