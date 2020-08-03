import React, { useCallback, useState, FC, ChangeEvent, FormEvent } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

import { DialogForm } from "../../components/dialog-form";

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
