import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Login } from "./components/login/Login";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

interface Props {
  open: boolean;
  onOpenLogin: () => void;
  onClose: () => void;
  onSubmit: () => void;
}

const Component: FC<Props> = ({ open, onOpenLogin, onClose, onSubmit }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            HolivarChat
          </Typography>
          <Button onClick={onOpenLogin} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Login open={open} onClose={onClose} onSubmit={onSubmit} />
    </div>
  );
};

export { Component };
