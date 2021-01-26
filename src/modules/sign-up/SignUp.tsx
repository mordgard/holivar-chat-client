import React, { useCallback, useState, FC, ChangeEvent, FormEvent } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

import api from "../../api";
import { useAsync } from "../../hooks";
import { useDialog } from "../dialog";
import { DialogForm } from "../../components/dialog-form";
// import { submitForm } from "./model";

interface Props {}

const SignUp: FC<Props> = () => {
  const { dialogName, closeDialog } = useDialog();
  const { run, status, message, reset } = useAsync(
    async ({ email, password }: { email: string; password: string }) => await api.auth.signUp({ email, password }),
  );

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value), []);
  const handlePasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value), []);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await run({ email, password });
      closeDialog();
    },
    [run, email, password, closeDialog],
  );

  return (
    <Dialog open={dialogName === "sign-up"} onClose={closeDialog} aria-labelledby="form-dialog-title">
      <DialogForm
        onSubmit={handleSubmit}
        onClose={closeDialog}
        status={status}
        title="Sign Up"
        description="Administrator will approve you after few minutes"
        submitButtonText="Sign up"
      >
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

export { SignUp };
