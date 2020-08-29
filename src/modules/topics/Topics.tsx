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
import { $topics, fetchTopics, addTopicAnswer, $topicsAnswers } from "./model";
import { $isLoggedIn } from "../auth";

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
  const isLoggedIn = useStore($isLoggedIn);
  const topicsAnswers = useStore($topicsAnswers);
  console.log("here", topicsAnswers);
  const handleAddTopic = useCallback(() => {
    isLoggedIn ? openDialog("add-topic") : openDialog("error");
  }, [isLoggedIn]);

  const handleAnswer = useCallback((topicId: string, answer: boolean) => {
    addTopicAnswer({ topicId, answer });
  }, []);

  useEffect(() => {
    fetchTopics();
  }, []);

  return (
    <Box display="flex" flexGrow={1}>
      <Grid container>
        {topics.map(({ id, title }) => (
          <Grid key={id} item xs={12} sm={6} lg={3} xl={2}>
            <Box p={2}>
              <Topic topicId={id} title={title} onAnswer={handleAnswer} />
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
