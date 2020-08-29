import React, { useCallback, useState, FC, ChangeEvent, FormEvent } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

import { DialogForm } from "../../components/dialog-form";
import { submitForm } from "./model";

interface Props {
  open: boolean;
  onClose: () => void;
}

const SignUp: FC<Props> = ({ open, onClose }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value), []);
  const handlePasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value), []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      submitForm({ email, password });
      onClose();
    },
    [email, password, onClose],
  );

  // TODO: figure out why it drops an error "findDOMNode is deprecated in StrictMode."
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogForm
        onSubmit={handleSubmit}
        onClose={onClose}
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