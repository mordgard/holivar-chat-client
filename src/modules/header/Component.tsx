import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Login } from "../login";
import { SignUp } from "../singup";

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
  isLoginOpen: boolean;
  onOpenLogin: () => void;
  onCloseLogin: () => void;
  onLogin: (email: string, password: string) => void;
  isSignUpOpen: boolean;
  onOpenSignUp: () => void;
  onCloseSignUp: () => void;
  onSignUp: (email: string, password: string) => void;
}

const Component: FC<Props> = ({
  isLoginOpen,
  onOpenLogin,
  onCloseLogin,
  onLogin,
  isSignUpOpen,
  onOpenSignUp,
  onCloseSignUp,
  onSignUp
}) => {
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
          <Button onClick={onOpenSignUp} color="inherit">
            Sign up
          </Button>
        </Toolbar>
      </AppBar>
      <SignUp open={isSignUpOpen} onClose={onCloseSignUp} onSubmit={onLogin} />
      <Login open={isLoginOpen} onClose={onCloseLogin} onSubmit={onSignUp} />
    </div>
  );
};

export { Component };
