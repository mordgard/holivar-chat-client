import { AxiosResponse } from "axios";
import { ITopic, ITopicAnswer, IUser } from "types";

export interface Api {
  topics: {
    getTopics: () => Promise<AxiosResponse<ITopic[]>>;
    addTopic: (data: Partial<ITopic>) => Promise<AxiosResponse>;
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
    addTopicAnswer: (topicId: string, answer: boolean) => Promise<AxiosResponse<{ data: ITopicAnswer[] }>>;
  };
}
