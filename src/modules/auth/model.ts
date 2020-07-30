import { createStore, createEvent } from "effector";

export interface IAuthentication {
  token?: string;
  userId?: string;
  loggedIn: boolean;
}

const initialState: IAuthentication = {
  loggedIn: false,
};

export const setUserCredentials = createEvent();
export const resetUserCredentials = createEvent();

export const $authentication = createStore<IAuthentication>(initialState)
  // @ts-ignore
  .on(setUserCredentials, (_, { token, userId }) => ({ token, userId, loggedIn: true }))
  .reset(resetUserCredentials);
