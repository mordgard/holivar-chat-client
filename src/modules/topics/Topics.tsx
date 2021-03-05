import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";

import api from "../../api";
import { useAsync, statuses } from "../../hooks";
import { useAuth } from "../auth";
import { useTopics } from "./context";
import { useDialog } from "../dialog";
import { Topic } from "../../components/topic";
import { CircularLoader } from "../../components/loader";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loader: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      marginTop: theme.spacing(4),
    },
    fab: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
    },
  }),
);

const Topics = () => {
  const classes = useStyles();
  const { openDialog } = useDialog();
  const { loggedIn } = useAuth();
  const { topics, fetchTopics, status } = useTopics();
  const { run } = useAsync(async (topicId: string) => await api.topics.deleteTopic(topicId));

  const handleAddTopic = React.useCallback(() => {
    loggedIn ? openDialog("add-topic") : openDialog("error");
  }, [loggedIn, openDialog]);

  const handleAnswer = React.useCallback((topicId: string, answer: boolean) => {
    // addTopicAnswer({ topicId, answer });
  }, []);

  const handleDelete = React.useCallback(
    async (topicId: string) => {
      await run(topicId);
      fetchTopics();
    },
    [fetchTopics, run],
  );

  React.useEffect(() => {
    if (!topics.length) {
      fetchTopics();
    }
  }, [fetchTopics, topics]);

  return (
    <Box display="flex" flexGrow={1}>
      {status === statuses.PROCESSING && (
        <Box className={classes.loader}>
          <CircularLoader />
        </Box>
      )}

      {status === statuses.SUCCESS && (
        <Grid container>
          {topics.map(({ id, title }) => (
            <Grid key={id} item xs={12} sm={6} lg={3} xl={2}>
              <Box p={2}>
                <Topic topicId={id} title={title} onAnswer={handleAnswer} onDelete={handleDelete} />
              </Box>
            </Grid>
          ))}
        </Grid>
      )}

      <Tooltip title="Add topic">
        <Fab className={classes.fab} onClick={handleAddTopic} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
};

export { Topics };
