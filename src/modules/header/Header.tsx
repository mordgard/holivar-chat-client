import React, { FC, useCallback } from "react";
import { useStore } from "effector-react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { resetAuthenticationState, $isLoggedIn } from "../auth";
import { useDialog } from "../dialog";

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

interface Props {}

const Header: FC<Props> = () => {
  const classes = useStyles();
  const { openDialog } = useDialog();
  const isLoggedIn = useStore($isLoggedIn);

  const handleOpenLogin = useCallback(() => openDialog("login"), [openDialog]);
  const handleOpenSignUp = useCallback(() => openDialog("sign-up"), [openDialog]);

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
          {isLoggedIn && (
            <Button onClick={() => resetAuthenticationState()} color="inherit">
              Logout
            </Button>
          )}
          {!isLoggedIn && (
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
