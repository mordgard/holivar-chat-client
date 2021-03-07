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
import { useDialog, DIALOG_NAMES } from "../dialog";
import { Topic } from "../../components/topic";
import { CircularLoader } from "../../components/loader";
import { TopicAnswer } from "types";
import { useCallback } from "react";

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
  const [answers, setAnswers] = React.useState<TopicAnswer[]>([]);
  const { openDialog } = useDialog();
  const { loggedIn } = useAuth();
  const { topics, fetchTopics, status: isTopicsFetching } = useTopics();
  const { run: deleteTopic } = useAsync(async (topicId: string) => await api.topics.deleteTopic(topicId));
  const { run: addAnswer } = useAsync(
    async (topicId: string, answer: boolean) => await api.users.addTopicAnswer(topicId, answer),
  );
  const { run: getAnswers, status: isAnswersFetching } = useAsync(async () => await api.users.getAnswers());

  const fetchAnswers = useCallback(async () => {
    const { data } = await getAnswers();
    setAnswers(data);
  }, [getAnswers]);

  const handleAddTopic = React.useCallback(() => {
    loggedIn ? openDialog(DIALOG_NAMES.addTopic) : openDialog(DIALOG_NAMES.error);
  }, [loggedIn, openDialog]);

  const handleAnswer = React.useCallback(
    async (topicId: string, answer: boolean) => {
      try {
        const response = await addAnswer(topicId, answer);
        if (response.status === 200) {
          setAnswers(response.data);
        }
      } catch (e) {
        console.log("fuck");
      }
    },
    [addAnswer],
  );

  const handleEdit = React.useCallback(
    (topicId: string) => {
      loggedIn ? openDialog(DIALOG_NAMES.editTopic, { topicId }) : openDialog(DIALOG_NAMES.error);
    },
    [loggedIn, openDialog],
  );

  const handleDelete = React.useCallback(
    async (topicId: string) => {
      await deleteTopic(topicId);
      fetchTopics();
    },
    [fetchTopics, deleteTopic],
  );

  React.useEffect(() => {
    if (!topics.length) {
      fetchTopics();
    }
  }, [fetchTopics, topics]);

  React.useEffect(() => {
    fetchAnswers();
  }, [fetchAnswers]);

  return (
    <Box display="flex" flexGrow={1}>
      {isTopicsFetching === statuses.PROCESSING && (
        <Box className={classes.loader}>
          <CircularLoader />
        </Box>
      )}

      {isTopicsFetching === statuses.SUCCESS && (
        <Grid container>
          {topics.map(({ id, title }) => {
            const topicAnswer = answers?.find(answer => answer.topicId === id);
            return (
              <Grid key={id} item xs={12} sm={6} lg={3} xl={2}>
                <Box p={2}>
                  <Topic
                    topicId={id}
                    title={title}
                    answer={topicAnswer?.answer}
                    isAnswersFetching={isAnswersFetching === statuses.PROCESSING}
                    onAnswer={handleAnswer}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                  />
                </Box>
              </Grid>
            );
          })}
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
