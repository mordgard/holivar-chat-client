import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

import api from "../../api";
import { useAsync } from "../../hooks";
import { useDialog } from "../dialog";
import { DialogForm } from "../../components/dialog-form";
import { Topic } from "types";
import { useTopics } from "../topics";

const AddTopic = () => {
  const { dialogName, closeDialog } = useDialog();
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const { fetchTopics } = useTopics();
  const { run, status } = useAsync(async ({ title }: Partial<Topic>) => await api.topics.addTopic({ title }));

  const handleEmailChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value), []);
  const handlePasswordChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value),
    [],
  );

  const handleSubmit = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await run({ title });
      closeDialog();
      fetchTopics();
    },
    [closeDialog, fetchTopics, run, title],
  );

  return (
    <Dialog open={dialogName === "add-topic"} onClose={closeDialog} aria-labelledby="form-dialog-title">
      <DialogForm onSubmit={handleSubmit} onClose={closeDialog} status={status} title="Add Topic">
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
