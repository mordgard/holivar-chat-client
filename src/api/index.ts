import axios from "axios";
import { Api } from "./types";

export const api = axios.create();

const PREFIX = "/api/v1";

const apiService: Api = {
  topics: {
    getTopics: () => api.get(`${PREFIX}/topics`)
  }
};

export default apiService;
