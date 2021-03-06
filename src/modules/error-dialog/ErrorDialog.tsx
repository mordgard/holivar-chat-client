import * as React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import { useDialog, DIALOG_NAMES } from "../dialog";

const ErrorDialog = () => {
  const { closeDialog, openDialog } = useDialog();

  const handleOpenLogin = () => {
    closeDialog();
    openDialog(DIALOG_NAMES.login);
  };

  const handleOpenSignUp = () => {
    closeDialog();
    openDialog(DIALOG_NAMES.signUp);
  };

  return (
    <Dialog open={true} onClose={closeDialog}>
      <DialogTitle>Please Login or Sign Up</DialogTitle>
      <DialogContent>
        <DialogContentText>To be able to create, update or delete topics, please sign up or login.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOpenSignUp} type="submit" variant="contained" color="primary">
          Sing up
        </Button>
        <Button onClick={handleOpenLogin} type="submit" variant="contained" color="primary">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { ErrorDialog };
