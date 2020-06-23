import React, { useMemo, FC } from "react";
import { Formik, Form } from "formik";
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
  onSubmit: () => void;
}

const Login: FC<Props> = ({ open, onClose, onSubmit }) => {
  const initialValues = useMemo(
    () => ({
      email: "",
      password: ""
    }),
    []
  );

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Login</DialogTitle>
      <DialogContent>
        <DialogContentText>To be able to create topics, you need to log in</DialogContentText>
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
          <Form>
            <TextField margin="dense" label="Email Address" type="email" fullWidth />
            <TextField margin="dense" label="Password" type="password" fullWidth />
          </Form>
        </Formik>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="primary">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { Login };
