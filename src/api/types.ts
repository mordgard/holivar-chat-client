import { AxiosResponse } from "axios";
import { Topic, TopicAnswer, User } from "types";

export interface Api {
  topics: {
    getTopics: () => Promise<AxiosResponse<Topic[]>>;
    addTopic: (data: Partial<Topic>) => Promise<AxiosResponse>;
    deleteTopic: (topicId: string) => Promise<Topic>;
    updateTopic: (topicId: string, data: Partial<Topic>) => Promise<Topic>;
  };

  auth: {
    login: ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => Promise<AxiosResponse<{ accessToken?: string }>>;
    signUp: ({ email, password }: { email: string; password: string }) => Promise<AxiosResponse>;
  };

  users: {
    getUsers: () => Promise<AxiosResponse<User[]>>;
    getAnswers: () => Promise<AxiosResponse<TopicAnswer[]>>;
    addTopicAnswer: (topicId: string, answer: boolean) => Promise<AxiosResponse<TopicAnswer[]>>;
  };
}
