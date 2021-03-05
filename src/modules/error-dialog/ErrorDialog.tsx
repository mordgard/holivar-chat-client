import * as React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import { useDialog } from "../dialog";

const ErrorDialog = () => {
  const { dialogName, closeDialog, openDialog } = useDialog();

  const handleOpenLogin = () => {
    closeDialog();
    openDialog("login");
  };

  const handleOpenSignUp = () => {
    closeDialog();
    openDialog("sign-up");
  };

  return (
    <Dialog open={dialogName === "error"} onClose={closeDialog}>
      <DialogTitle>Please Login or Sign Up</DialogTitle>
      <DialogContent>
        <DialogContentText>To be able to create topics, please sign up or login.</DialogContentText>
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
