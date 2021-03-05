import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

interface Props {
  topicId: string;
  title: string;
  description?: string;
  onAnswer: (topicId: string, answer: boolean) => void;
  onDelete: (topicId: string) => void;
}

const Topic: React.FC<Props> = ({ topicId, title, description, onAnswer, onDelete }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={title}
        action={
          <IconButton onClick={() => onDelete(topicId)} aria-label="remove">
            <DeleteIcon />
          </IconButton>
        }
        subheader="Do you agree?"
      />
      <CardContent>
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
