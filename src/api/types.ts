import { AxiosResponse } from "axios";
import { Topic, TopicAnswer, User } from "types";

export interface Api {
  topics: {
    getTopics: () => Promise<AxiosResponse<Topic[]>>;
    addTopic: (data: Partial<Topic>) => Promise<AxiosResponse>;
    deleteTopic: (topicId: string) => Promise<Topic>;
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
    getUsers: () => Promise<AxiosResponse<{ data: User[] }>>;
    addTopicAnswer: (topicId: string, answer: boolean) => Promise<AxiosResponse<{ data: TopicAnswer[] }>>;
  };
}
