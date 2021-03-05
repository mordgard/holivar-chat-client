import * as React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import { Status, statuses } from "../../hooks";

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
  title: string;
  description?: string;
  submitButtonText?: string;
  status?: Status;
}

const DialogForm: React.FC<Props> = ({
  onSubmit,
  onClose,
  title,
  description,
  submitButtonText,
  status = statuses.IDLE,
  children,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        {description && <DialogContentText>{description}</DialogContentText>}
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary" disabled={["ERROR", "PROCESSING"].includes(status)}>
          {submitButtonText ? submitButtonText : "Submit"}
        </Button>
      </DialogActions>
    </form>
  );
};

export { DialogForm };
