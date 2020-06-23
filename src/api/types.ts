import { AxiosResponse } from "axios";
import { Topic } from "types";

export interface Api {
  topics: {
    getTopics: () => Promise<AxiosResponse<{ data: Topic[] }>>;
  };
}
