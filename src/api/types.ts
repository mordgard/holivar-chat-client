import { AxiosResponse } from "axios";
import { Topic } from "types";

export interface Api {
  topics: {
    getTopics: () => Promise<AxiosResponse<{ data: Topic[] }>>;
  };
  auth: {
    login: (email: string, password: string) => Promise<AxiosResponse<{ data: string }>>;
    signup: (email: string, password: string) => Promise<AxiosResponse<{ data: string }>>;
  };
}
