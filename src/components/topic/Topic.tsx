import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});

interface Props {
  topicId: string;
  title: string;
  description?: string;
  onAnswer: (topicId: string, answer: boolean) => void;
}

const Topic: React.FC<Props> = ({ topicId, title, description, onAnswer }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Do you agree?
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button onClick={() => onAnswer(topicId, false)} size="medium" variant="contained">
          No
        </Button>
        <Button onClick={() => onAnswer(topicId, true)} size="medium" variant="contained">
          Yes
        </Button>
      </CardActions>
    </Card>
  );
};

export { Topic };
