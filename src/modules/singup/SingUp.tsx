import React, { useCallback, useState, FC, ChangeEvent, FormEvent } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (email: string, password: string) => void;
}

const SignUp: FC<Props> = ({ open, onClose, onSubmit }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value), []);
  const handlePasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value), []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(email, password);
    },
    [email, password, onSubmit]
  );

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To be able to create topics, you need to request permission. Please enter email and password and admin will
            approve you.
          </DialogContentText>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Sign up
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export { SignUp };
