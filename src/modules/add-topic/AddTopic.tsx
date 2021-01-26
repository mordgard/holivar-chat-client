import React, { useCallback, useState, FC, ChangeEvent, FormEvent } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

import { useDialog } from "../dialog";
import { DialogForm } from "../../components/dialog-form";
// import { addTopic } from "./model";

interface Props {}

const AddTopic: FC<Props> = () => {
  const { dialogName, closeDialog } = useDialog();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value), []);
  const handlePasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value), []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // addTopic({ title });
      closeDialog();
    },
    [title, closeDialog],
  );

  return (
    <Dialog open={dialogName === "add-topic"} onClose={closeDialog} aria-labelledby="form-dialog-title">
      <DialogForm onSubmit={handleSubmit} onClose={closeDialog} title="Add Topic">
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
