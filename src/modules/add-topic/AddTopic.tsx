import React, { useCallback, useState, FC, ChangeEvent, FormEvent } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

import { DialogForm } from "../../components/dialog-form";
import { addTopic } from "./model";

interface Props {
  open: boolean;
  onClose: () => void;
}

const AddTopic: FC<Props> = ({ open, onClose }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value), []);
  const handlePasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value), []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      addTopic({ title });
      onClose();
    },
    [title, onClose],
  );

  // TODO: figure out why it drops an error "findDOMNode is deprecated in StrictMode."
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogForm onSubmit={handleSubmit} onClose={onClose} title="Add Topic">
        <>
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
        </>
      </DialogForm>
    </Dialog>
  );
};

export { AddTopic };
