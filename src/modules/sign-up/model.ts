import { createEvent, createEffect, forward } from "effector";
import api from "../../api";

export interface ISignUpForm {
  email: string;
  password: string;
}

export const submitForm = createEvent<ISignUpForm>();

export const signUpFx = createEffect("signUpFx", {
  handler: async ({ email, password }) => {
    try {
      await api.auth.signUp({ email, password });
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
  to: signUpFx,
});
