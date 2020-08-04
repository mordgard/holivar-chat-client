import { createEvent, createStore } from "effector";

export const openDialog = createEvent<string>();
export const closeDialog = createEvent();

export const $dialogName = createStore("")
  .on(openDialog, (state, name) => name)
  .reset(closeDialog);
