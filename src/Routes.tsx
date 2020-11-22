import React, { FC } from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import { DialogProvider } from "./modules/dialog";
import { Header } from "./modules/header";
import { Topics } from "./modules/topics";
import { Dialog } from "./modules/dialog";

const Routes: FC = () => {
  return (
    <>
      <CssBaseline />
      <Route path="/">
        <DialogProvider>
          <Header />
          <Topics />
          <Dialog />
        </DialogProvider>
      </Route>
    </>
  );
};
export { Routes };
