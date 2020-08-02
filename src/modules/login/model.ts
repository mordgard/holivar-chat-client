import { createEvent, createEffect, forward } from "effector";
import api from "../../api";

export interface ILoginForm {
  email: string;
  password: string;
}

export const submitForm = createEvent<ILoginForm>();

export const loginFx = createEffect("loginFx", {
  handler: async ({ email, password }) => {
    try {
      const response = await api.auth.login({ email, password });
      const { accessToken } = response.data;
      return accessToken;
    } catch (error) {
      console.log(error);
    }
  },
});

submitForm.watch(payload => {
  console.log("submitFormWatcherPayload", payload);
});

forward({
  from: submitForm,
  to: loginFx,
});
