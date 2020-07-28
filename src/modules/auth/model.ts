import { createStore, createEvent } from "effector";

export interface IAuthentication {
  token?: string;
  userId?: string;
  loggedIn: boolean;
}

const initialState: IAuthentication = {
  loggedIn: false,
};

export const $authentication = createStore<IAuthentication>(initialState);
