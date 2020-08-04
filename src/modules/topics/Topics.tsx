import React, { FC, useEffect, useCallback } from "react";
import { useStore } from "effector-react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";

import { Topic } from "../../components/topic";
import { openDialog } from "../dialog";
import { $topics, fetchTopics } from "./model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
    },
  }),
);

interface Props {}

const Topics: FC<Props> = () => {
  const classes = useStyles();

  const topics = useStore($topics);

  const handleAddTopic = useCallback(() => openDialog("add-topic"), []);

  useEffect(() => {
    fetchTopics();
  }, []);

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
        <Fab className={classes.fab} onClick={handleAddTopic} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
};

export { Topics };
