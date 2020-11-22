import React, { useCallback, useState, FC, ChangeEvent, FormEvent } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

import { useDialog } from "../dialog";
import { DialogForm } from "../../components/dialog-form";
import { submitForm } from "./model";

interface Props {}

const Login: FC<Props> = () => {
  const { dialogName, closeDialog } = useDialog();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value), []);
  const handlePasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value), []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      submitForm({ email, password });
      closeDialog();
    },
    [email, password, closeDialog],
  );

  return (
    <Dialog open={dialogName === "login"} onClose={closeDialog} aria-labelledby="form-dialog-title">
      <DialogForm onSubmit={handleSubmit} onClose={closeDialog} title="Login" submitButtonText="Login">
        <TextField
          margin="dense"
          value={email}
          onChange={handleEmailChange}
          name="email"
          required
          label="Email Address"
          type="email"
          fullWidth
        />
        <TextField
          margin="dense"
          value={password}
          onChange={handlePasswordChange}
          name="password"
          required
          label="Password"
          type="password"
          fullWidth
        />
      </DialogForm>
    </Dialog>
  );
};

export { Login };
