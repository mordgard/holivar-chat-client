import { createEvent, createEffect, forward } from "effector";
import api from "../../api";

export interface ILoginForm {
  email: string;
  password: string;
}

export const submitForm = createEvent<ILoginForm>();

export const loginFx = createEffect("login", {
  handler: async ({ email, password }) => {
    try {
      const response = await api.auth.login({ email, password });
      const { accessToken } = response.data;
      console.log("loginFx", accessToken);
    } catch (error) {
      console.log(error);
    }
  },
});

forward({
  from: submitForm,
  to: loginFx,
});
