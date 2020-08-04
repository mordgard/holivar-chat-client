import React, { FC, useCallback } from "react";
import { useStore } from "effector-react";

import { $dialogName, closeDialog } from "./model";
import { Login } from "../login";
import { AddTopic } from "../add-topic";

const Dialog: FC = () => {
  const activeName = useStore($dialogName);

  const handleClose = useCallback(() => closeDialog(), []);

  return (
    <>
      {activeName === "login" && <Login open onClose={handleClose} />}
      {activeName === "add-topic" && <AddTopic open onClose={handleClose} />}
    </>
  );
};

export { Dialog };
