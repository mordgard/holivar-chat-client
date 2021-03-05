import * as React from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import { DialogProvider } from "./modules/dialog";
import { AuthProvider } from "./modules/auth";
import { Header } from "./modules/header";
import { Topics, TopicsProvider } from "./modules/topics";
import { Dialog } from "./modules/dialog";

const Routes = () => (
  <CssBaseline>
    <Route path="/">
      <DialogProvider>
        <AuthProvider>
          <Header />
          <TopicsProvider>
            <Topics />
            <Dialog />
          </TopicsProvider>
        </AuthProvider>
      </DialogProvider>
    </Route>
  </CssBaseline>
);

export { Routes };
