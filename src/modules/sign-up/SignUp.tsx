import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

import api from "../../api";
import { useAsync } from "../../hooks";
import { useDialog } from "../dialog";
import { DialogForm } from "../../components/dialog-form";

const SignUp = () => {
  const { dialogName, closeDialog } = useDialog();
  const { run, status, message, reset } = useAsync(
    async ({ email, password }: { email: string; password: string }) => await api.auth.signUp({ email, password }),
  );

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleEmailChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value), []);
  const handlePasswordChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    [],
  );

  const handleSubmit = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
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
