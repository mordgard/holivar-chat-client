import { AxiosInstance } from "axios";
import { Api } from "./types";

const PREFIX = "/api/v1";

const apiService = (api: AxiosInstance): Api => ({
  topics: {
    getTopics: () => api.get(`${PREFIX}/topics`),
    addTopic: data => api.post(`${PREFIX}/topics`, data),
    deleteTopic: topicId => api.delete(`${PREFIX}/topics/${topicId}`),
  },
  auth: {
    login: ({ email, password }) => api.post(`${PREFIX}/login`, { email, password }),
    signUp: ({ email, password }) => api.post(`${PREFIX}/users`, { email, password }),
  },
  users: {
    getUsers: () => api.get(`${PREFIX}/users/`),
    addTopicAnswer: (topicId, answer) => api.post(`${PREFIX}/users/topic-answer`, { topicId, answer }),
  },
});

export { apiService };
