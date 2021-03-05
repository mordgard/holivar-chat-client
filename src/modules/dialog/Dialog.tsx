import * as React from "react";

import { Login } from "../login";
import { AddTopic } from "../add-topic";
import { SignUp } from "../sign-up";
import { ErrorDialog } from "../error-dialog";

const Dialog = () => {
  return (
    <>
      <Login />
      <SignUp />
      <AddTopic />
      <ErrorDialog />
    </>
  );
};

export { Dialog };
