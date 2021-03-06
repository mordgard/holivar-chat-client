import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

import api from "../../api";
import { useAsync } from "../../hooks";
import { useDialog } from "../dialog";
import { useTopics } from "../topics";
import { DialogForm } from "../../components/dialog-form";
import { Topic } from "types";

const EditTopic = () => {
  const { meta, closeDialog } = useDialog();
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const { fetchTopics } = useTopics();
  const { run, status } = useAsync(
    async (topicId: string, { title }: Partial<Topic>) => await api.topics.updateTopic(topicId, { title }),
  );

  const handleTitleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value), []);
  const handleDescriptionChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value),
    [],
  );

  const handleSubmit = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (meta?.topicId) {
        await run(meta.topicId, { title });
        closeDialog();
        fetchTopics();
      }
    },
    [closeDialog, fetchTopics, meta, run, title],
  );

  return (
    <Dialog open={true} onClose={closeDialog} aria-labelledby="form-dialog-title">
      <DialogForm onSubmit={handleSubmit} onClose={closeDialog} status={status} title="Edit Topic">
        <>
          <TextField
            margin="dense"
            value={title}
            onChange={handleTitleChange}
            name="title"
            required
            label="Title"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            value={description}
            onChange={handleDescriptionChange}
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

export { EditTopic };
