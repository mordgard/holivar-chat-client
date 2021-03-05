import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

import api from "../../api";
import { useAsync } from "../../hooks";
import { useAuth } from "../auth";
import { useDialog } from "../dialog";
import { DialogForm } from "../../components/dialog-form";

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const { run, status, message, reset } = useAsync(async (data: LoginForm) => await api.auth.login(data));
  const { dialogName, closeDialog } = useDialog();
  const { login, token, loggedIn } = useAuth();

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
