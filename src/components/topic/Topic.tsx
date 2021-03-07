import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

interface Props {
  topicId: string;
  title: string;
  answer?: boolean;
  isAnswersFetching: boolean;
  description?: string;
  onAnswer: (topicId: string, answer: boolean) => void;
  onDelete: (topicId: string) => void;
  onEdit: (topicId: string) => void;
}

const Topic = ({ topicId, title, answer, isAnswersFetching, description, onAnswer, onDelete, onEdit }: Props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const subheader = answer === undefined ? "Do you agree?" : `Your answer is ${answer ? "YES" : "NO"}`;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={title}
        action={
          <IconButton onClick={handleClick} aria-label="remove">
            <MoreIcon />
          </IconButton>
        }
        subheader={subheader}
      />
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => onEdit(topicId)}>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </MenuItem>
        <MenuItem onClick={() => onDelete(topicId)}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Remove" />
        </MenuItem>
      </Menu>
      <CardContent>
        {description && (
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          onClick={() => onAnswer(topicId, false)}
          color="secondary"
          size="medium"
          variant="contained"
          disabled={answer !== undefined || isAnswersFetching}
        >
          No
        </Button>
        <Button
          onClick={() => onAnswer(topicId, true)}
          color="secondary"
          size="medium"
          variant="contained"
          disabled={answer !== undefined || isAnswersFetching}
        >
          Yes
        </Button>
      </CardActions>
    </Card>
  );
};

export { Topic };
