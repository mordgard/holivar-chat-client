import { AxiosInstance } from "axios";
import { Api } from "./types";

const PREFIX = "/api/v1";

const apiService = (axiosInstance: AxiosInstance): Api => ({
  topics: {
    getTopics: () => axiosInstance.get(`${PREFIX}/topics`),
    addTopic: data => axiosInstance.post(`${PREFIX}/topics`, data),
  },
  auth: {
    login: ({ email, password }) => axiosInstance.post(`${PREFIX}/login`, { email, password }),
    becomeUser: ({ email, password }) => axiosInstance.post(`${PREFIX}/users`, { email, password }),
  },
  users: {
    getUsers: () => axiosInstance.get(`${PREFIX}/users/`),
  },
});

export { apiService };
