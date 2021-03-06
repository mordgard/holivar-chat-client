import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { useAuth } from "../auth";
import { useDialog, DIALOG_NAMES } from "../dialog";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const Header = () => {
  const classes = useStyles();
  const { openDialog } = useDialog();
  const { loggedIn, logout } = useAuth();

  const handleOpenLogin = () => openDialog(DIALOG_NAMES.login);
  const handleOpenSignUp = () => openDialog(DIALOG_NAMES.signUp);
  const handleResetAuthenticationState = () => logout();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={() => {
              console.log("open drawer");
            }}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            HolivarChat
          </Typography>
          {loggedIn && (
            <Button onClick={handleResetAuthenticationState} color="inherit">
              Logout
            </Button>
          )}
          {!loggedIn && (
            <>
              <Button onClick={handleOpenLogin} color="inherit">
                Login
              </Button>
              <Button onClick={handleOpenSignUp} color="inherit">
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export { Header };
