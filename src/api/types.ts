import { AxiosResponse } from "axios";
import { Topic, User } from "types";

export interface Api {
  topics: {
    getTopics: () => Promise<AxiosResponse<{ data: Topic[] }>>;
  };
  auth: {
    login: (email: string, password: string) => Promise<AxiosResponse<{ accessToken?: string }>>;
    becomeUser: (email: string, password: string) => Promise<AxiosResponse<{ data: string }>>;
  };
  users: {
    getUsers: () => Promise<AxiosResponse<{ data: User[] }>>;
  };
}
