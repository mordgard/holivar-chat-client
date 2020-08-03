import React, { FC, FormEvent, ReactNode } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

interface Props {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
  title: string;
  description?: string;
  submitButtonText?: string;
  children: ReactNode;
}

const DialogForm: FC<Props> = ({ onSubmit, onClose, title, description, submitButtonText, children }) => {
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
        <Button type="submit" variant="contained" color="primary">
          {submitButtonText ? submitButtonText : "Submit"}
        </Button>
      </DialogActions>
    </form>
  );
};

export { DialogForm };
