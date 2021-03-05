declare module "types" {
  export interface Topic {
    id: string;
    title: string;
    description: string;
  }

  export interface User {
    id: string;
    email: string;
    status: UserStatus;
    role: UserRole;
    topicsAnswers: TopicAnswer[];
  }

  export interface TopicAnswer {
    topicId: string;
    answer: boolean;
  }

  export type UserRole = "moderator" | "admin";
  export type UserStatus = "new" | "active" | "archived";
}
