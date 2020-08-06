import React, { FC, useCallback } from "react";
import { useStore } from "effector-react";

import { $dialogName, closeDialog } from "./model";
import { Login } from "../login";
import { AddTopic } from "../add-topic";
import { SignUp } from "../sign-up";
import { ErrorDialog } from "../error-dialog";

const Dialog: FC = () => {
  const activeName = useStore($dialogName);

  const handleClose = useCallback(() => closeDialog(), []);

  return (
    <>
      {activeName === "login" && <Login open onClose={handleClose} />}
      {activeName === "sign-up" && <SignUp open onClose={handleClose} />}
      {activeName === "add-topic" && <AddTopic open onClose={handleClose} />}
      {activeName === "error" && <ErrorDialog open onClose={handleClose} />}
    </>
  );
};

export { Dialog };
