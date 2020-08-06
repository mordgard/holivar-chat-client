import React, { FC, useCallback } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import { openDialog } from "../dialog";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ErrorDialog: FC<Props> = ({ open, onClose }) => {
  const handleOpenLogin = useCallback(() => {
    onClose();
    openDialog("login");
  }, [onClose]);

  const handleOpenSignUp = useCallback(() => {
    onClose();
    openDialog("sign-up");
  }, [onClose]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Please Login or Sign Up</DialogTitle>
      <DialogContent>
        <DialogContentText>To be able to create topics, please sign up or login.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
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
