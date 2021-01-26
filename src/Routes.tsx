import React, { FC } from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import { DialogProvider } from "./modules/dialog";
import { AuthProvider } from "./modules/auth";
import { Header } from "./modules/header";
import { Topics, TopicsProvider } from "./modules/topics";
import { Dialog } from "./modules/dialog";

const Routes: FC = () => (
  <CssBaseline>
    <Route path="/">
      <DialogProvider>
        <AuthProvider>
          <Header />
          <TopicsProvider>
            <Topics />
          </TopicsProvider>
          <Dialog />
        </AuthProvider>
      </DialogProvider>
    </Route>
  </CssBaseline>
);

export { Routes };
