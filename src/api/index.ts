import axios from "axios";
import { Api } from "./types";

export const api = axios.create();

const PREFIX = "/api/v1";

const apiService: Api = {
  topics: {
    getTopics: () => api.get(`${PREFIX}/topics`),
  },
  auth: {
    login: ({ email, password }) => api.post(`${PREFIX}/login`, { email, password }),
    becomeUser: ({ email, password }) => api.post(`${PREFIX}/users`, { email, password }),
  },
  users: {
    getUsers: () => api.get(`${PREFIX}/users/`),
  },
};

export default apiService;
