import { AxiosResponse } from "axios";
import { ITopic, IUser } from "types";

export interface Api {
  topics: {
    getTopics: () => Promise<AxiosResponse<{ data: ITopic[] }>>;
    addTopic: (data: ITopic) => Promise<AxiosResponse>;
  };

  auth: {
    login: ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => Promise<AxiosResponse<{ accessToken?: string }>>;

    signUp: ({ email, password }: { email: string; password: string }) => Promise<AxiosResponse<{ data: string }>>;
  };

  users: {
    getUsers: () => Promise<AxiosResponse<{ data: IUser[] }>>;
  };
}
