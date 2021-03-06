import * as React from "react";

import { useDialog } from "./context";
import { Login } from "../login";
import { AddTopic } from "../add-topic";
import { EditTopic } from "../edit-topic";
import { SignUp } from "../sign-up";
import { ErrorDialog } from "../error-dialog";

enum DIALOG_NAMES {
  login = "login",
  signUp = "signUp",
  addTopic = "addTopic",
  editTopic = "editTopic",
  error = "error",
}

const Dialog = () => {
  const { dialogName } = useDialog();
  return (
    <>
      {dialogName === DIALOG_NAMES.login && <Login />}
      {dialogName === DIALOG_NAMES.signUp && <SignUp />}
      {dialogName === DIALOG_NAMES.addTopic && <AddTopic />}
      {dialogName === DIALOG_NAMES.editTopic && <EditTopic />}
      {dialogName === DIALOG_NAMES.error && <ErrorDialog />}
    </>
  );
};

export { Dialog, DIALOG_NAMES };
