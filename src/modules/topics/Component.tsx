import React, { FC } from "react";
import { ITopic } from "types";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";

import { Topic } from "../../components/topic";
import { AddTopic } from "../add-topic";

interface Props {
  topics: ITopic[];
  onAddTopic: ({ title, description }: { title: string; description: string }) => void;
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
    },
  }),
);

const Component: FC<Props> = ({ topics, onAddTopic, onOpen, onClose, isOpen }) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexGrow={1}>
      <Grid container>
        {topics.map(({ title }) => (
          <Grid key={title} item xs={12} sm={6} lg={3}>
            <Box p={2}>
              <Topic title={title} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Tooltip title="Add topic">
        <Fab className={classes.fab} onClick={() => onOpen()} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      {isOpen && <AddTopic open={isOpen} onClose={onClose} onSubmit={onAddTopic} />}
    </Box>
  );
};

export { Component };
