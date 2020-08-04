import React, { FC } from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Header } from "./modules/header";
import { Topics } from "./modules/topics";
import { Dialog } from "./modules/dialog";

const Routes: FC = () => {
  return (
    <>
      <CssBaseline />
      <Route path="/">
        <Header />
        <Topics />
        <Dialog />
      </Route>
    </>
  );
};
export { Routes };
