import { AxiosResponse } from "axios";
import { ITopic, IUser } from "types";

export interface Api {
  topics: {
    getTopics: () => Promise<AxiosResponse<{ data: ITopic[] }>>;
  };

  auth: {
    login: ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => Promise<AxiosResponse<{ accessToken?: string }>>;

    becomeUser: ({ email, password }: { email: string; password: string }) => Promise<AxiosResponse<{ data: string }>>;
  };

  users: {
    getUsers: () => Promise<AxiosResponse<{ data: IUser[] }>>;
  };
}
