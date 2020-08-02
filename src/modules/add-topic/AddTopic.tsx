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
  onSubmit: ({ title, description }: { title: string; description: string }) => void;
}

const AddTopic: FC<Props> = ({ open, onClose, onSubmit }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value), []);
  const handlePasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value), []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit({ title, description });
    },
    [title, description, onSubmit],
  );

  // TODO: figure out why it drops an error "findDOMNode is deprecated in StrictMode."
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Add Topic</DialogTitle>
        <DialogContent>
          <DialogContentText>To add topic enter the title and description below.</DialogContentText>
          <TextField
            margin="dense"
            value={title}
            onChange={handleEmailChange}
            name="title"
            required
            label="Title"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            value={description}
            onChange={handlePasswordChange}
            name="description"
            label="Description"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export { AddTopic };
