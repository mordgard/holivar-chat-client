import React, { useCallback, useState, FC, ChangeEvent, FormEvent } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

import api from "../../api";
import { useAsync } from "../../hooks";
import { useAuth } from "../auth";
import { useDialog } from "../dialog";
import { DialogForm } from "../../components/dialog-form";

interface ILoginForm {
  email: string;
  password: string;
}
interface Props {}

const Login: FC<Props> = () => {
  const { run, status, message, reset } = useAsync(async (data: ILoginForm) => await api.auth.login(data));
  const { dialogName, closeDialog } = useDialog();
  const { login, token, loggedIn } = useAuth();
  console.log("HERE", status, token, loggedIn);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value), []);
  const handlePasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value), []);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const response = await run({ email, password });
      const { accessToken } = response.data;
      console.log(accessToken);
      if (accessToken) {
        login(accessToken);
      }
      closeDialog();
    },
    [run, email, password, closeDialog, login],
  );

  return (
    <Dialog open={dialogName === "login"} onClose={closeDialog} aria-labelledby="form-dialog-title">
      <DialogForm onSubmit={handleSubmit} onClose={closeDialog} status={status} title="Login" submitButtonText="Login">
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
