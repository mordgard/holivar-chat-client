import { createStore, createEvent } from "effector";
import withStorage from "effector-storage";
import { loginFx } from "../login";

export interface IAuthentication {
  token?: string;
  userId?: string;
  loggedIn: boolean;
}

const initialState: IAuthentication = {
  loggedIn: false,
};

export const resetAuthenticationState = createEvent();

const createStorageStore = withStorage(createStore);

export const $authentication = createStorageStore<IAuthentication>(initialState, { key: "holivarChatSession" })
  .on(loginFx.doneData, (_, token) => ({ token, loggedIn: true }))
  .reset(resetAuthenticationState);

$authentication.watch(state => {
  console.log("authenticationState", state);
});

export const $isLoggedIn = $authentication.map(state => state.loggedIn);
