import React, { FC } from "react";
import { Topic as TopicType } from "types";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Topic } from "../../components/topic";

interface Props {
  topics: TopicType[];
}

const Component: FC<Props> = ({ topics }) => {
  return (
    <Box display="flex" flexGrow={1}>
      <Grid container>
        {topics.map(({ title }) => (
          <Grid item xs={12} sm={6}>
            <Box p={2}>
              <Topic title={title} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export { Component };
